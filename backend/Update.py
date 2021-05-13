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

        tag = updateInfo["tag"].upper()
        
        students = updateInfo["students"]
        print (students)
        desks = updateInfo["desks"]
        print (desks)
        teacher = updateInfo["teacher"]
        print (teacher)
        whiteboard = updateInfo["whiteboard"]
        print (session)
        
        
        if 'username' in session:
            usertag = session.get("userID")
            print(usertag)
        else:
            return {"error": "You are not logged in"}
       
        
        
        myClass = client["classrooms"][usertag].find_one({'tag':tag})
        if myClass is None:
            return {"error": "No class found withtag given"}
        print (myClass)

        


        #client["classrooms"][usertag].insert_one(updateInfo)
        client["classrooms"][usertag].update({'tag':tag}, {"$set": {"desks":desks}})
        client["classrooms"][usertag].update({'tag':tag}, {"$set": {"students":students}})
        client["classrooms"][usertag].update({'tag':tag}, {"$set": {"teacher":teacher}})
        client["classrooms"][usertag].update({'tag':tag}, {"$set": {"whiteboard":whiteboard}})
        return {"success": "true"}, 201, [('Access-Control-Allow-Origin', '*')]
    


