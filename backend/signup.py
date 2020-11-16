from flask import Flask, request
from flask_restful import Api, Resource
import json
import pymongo
from pymongo import MongoClient
from encryptCheck import encrypt_password

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

chinmay = client["chinmay"]
auth = chinmay["auth"]

app = Flask(__name__)
api = Api(app)

class signup(Resource):
    def post(self):
        userInfo = json.loads(request.json)
        print(userInfo["name"])
        userInfo["password"] = encrypt_password(userInfo["password"])
        x = auth.insert_one(userInfo)
        dblist = client.list_database_names()
        print(dblist)
        print(list(chinmay.auth.find({})))
        return {}


api.add_resource(signup, "/signup/")

if __name__ == "__main__":
    app.run()

