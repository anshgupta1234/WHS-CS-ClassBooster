
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

class delete(Resource):
    def post(self):
        updateInfo = request.json
        id = ObjectId(updateInfo["ID"])
        userid = session["userID"]
        print "ID: "+userid
        myClass = client["classrooms"][userid].find_one({'_id':id})
        client["classrooms"][userid].delete_one({'_id':id})
        return {"success": "true"}
        
    



    



