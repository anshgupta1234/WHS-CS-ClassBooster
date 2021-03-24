from flask import Flask, request, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import json
import requests
import pymongo
from pymongo import MongoClient
from bson import ObjectId


client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}

class rename(Resource):
    def post(self):
        updateInfo = request.json
        id = ObjectId(updateInfo["ID"])
        name = updateInfo["name"]
        nick = updateInfo["nick"]
       if 'username' in session:
            userID = session.get("userID")
            print(userID)
        else:
            return {"error": "You are not logged in"}
        myClass = client["classrooms"][userID].find_one({'_id':id})
        if myClass is None:
            return {"error": "No class found with id given"}
    
        client["classrooms"][userID].update({'_id':id}, {"$set": {"name":name}})
        client["classrooms"][userID].update({'_id':id}, {"$set": {"nick":nick}})

        return {"success": "true"}
    



    



