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

class update(Resource):
    def post(self):
        print ("Hello")
        
        updateInfo = request.json

        id = ObjectId(updateInfo["ID"])
        
        students = updateInfo["students"]
        print (students)
        desks = updateInfo["desks"]
        print (desks)
        teacher = updateInfo["teacher"]
        print (teacher)
        whiteboard = updateInfo["whiteboard"]
        print (session)
        

        userid = session.get("userID")
       
        
        
        myClass = client["classrooms"][userid].find_one({'_id':id})
        if myClass is None:
            return {"error": "No class found with id given"}
        print (myClass)

        


        #client["classrooms"][userid].insert_one(updateInfo)
        client["classrooms"][userid].update({'_id':id}, {"$set": {"desks":desks}})
        client["classrooms"][userid].update({'_id':id}, {"$set": {"students":students}})
        client["classrooms"][userid].update({'_id':id}, {"$set": {"teacher":teacher}})
        client["classrooms"][userid].update({'_id':id}, {"$set": {"whiteboard":whiteboard}})
        return {"success": "true"}
    


