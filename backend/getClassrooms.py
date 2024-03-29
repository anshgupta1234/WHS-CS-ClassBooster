from flask import Flask, request, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import json
import requests
import pymongo
from pymongo import MongoClient
from bson import ObjectId
from bson import json_util


client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}

class get(Resource):
    def post(self):
        updateInfo = request.json
        classID = updateInfo["tag"]
        if 'username' in session:
            userid = session.get("userID")
            print(userid)
        else:
            return {"error": "You are not logged in"}
        print ("ID: " +userid)
        
        
        myClass = client["classrooms"][userid].find_one({'tag':classID})
        if myClass is None:
            return {"error": "No class found with id given"}
        print (myClass)
        return json.loads(json_util.dumps(myClass))


class getAll(Resource):
    def get(self):
        if 'username' in session:
            userid = session.get("userID")
            print(userid)
        else:
            print(session)
            return {"error": "You are not logged in"}
        print(session)
        print ("ID: " +userid)
        classes = list(client["classrooms"][userid].find({}))
        classNames = list()
        for thing in classes:
            name = thing.get("name")
            nick = thing.get("nick")
            num = thing.get("tag")
            className = {"name": name, "nick": nick, "tag": num, "link": thing.get("link")}
            
            
            print (className)
            classNames.append(className)
        return {"classes": classNames}, 201

