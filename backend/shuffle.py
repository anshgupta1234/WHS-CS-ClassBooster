from flask import Flask, request, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import json
import requests
import pymongo
from pymongo import MongoClient
from bson import ObjectId
from algos import main


client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}

class shuffle(Resource):
    def post(self):
        updateInfo = request.json
        tag = updateInfo["tag"].upper()
        if 'username' in session:
            userID = session.get("userID")
            print(userID)
        else:
            return {"error": "You are not logged in"}, 201, [('Access-Control-Allow-Origin', '*')]
        myClass = client["classrooms"][userID].find_one({'tag': tag})
        if myClass is None:
            return {"error": "No class found with id given"}
        desks = myClass["desks"]
        desks.pop('teacherDesk')
        students = []
        for key in myClass["students"]:
            students.append(myClass["students"][key])
        whiteboard = myClass["whiteboard"]
        teacher = myClass["teacher"]
        print(students)
        pairing = main(desks, students, whiteboard, teacher)
        client["classrooms"][userID].update({'tag':tag}, {"$set": {"pairings":pairing}})
        return pairing, 201, [('Access-Control-Allow-Origin', '*')]