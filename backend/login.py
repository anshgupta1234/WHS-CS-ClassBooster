from flask import Flask, request
from flask_restful import Api, Resource
import json
import pymongo
from pymongo import MongoClient
from encryptCheck import check_encrypted_password

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
api = Api(app)

class login(Resource):
    def post(self):
        thingToReturn = {"status": "False"}
        loginInfo = json.loads(request.json)
        for user in list(client["chinmay"]["auth"].find({})):
            if(user["username"] == loginInfo["username"]):
                if(check_encrypted_password(loginInfo["password"], user["password"])==True):
                    thingToReturn = {"status": "True"}
        return thingToReturn

api.add_resource(login, "/login/")
if __name__ == "__main__":
    app.run()


dblist = client.list_database_names()
print(dblist)