from flask import Flask, request, session
from flask_restful import Api, Resource
import json
import requests
import pymongo
from pymongo import MongoClient
import login
from bson import ObjectId
BASE = "http://127.0.0.1:5000/"

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
@app.route('/classrooms/update', methods=['POST'])
def update():
    updateInfo = request.json

    id = ObjectId(updateInfo["ID"])
    
    students = updateInfo["students"]
    print students
    desks = updateInfo["desks"]
    print desks
    

    userid = session["userID"]
    print "ID: " +userid
    
    
    myClass = client["classrooms"][userid].find_one({'_id':id})
    print myClass

    


    #client["classrooms"][userid].insert_one(updateInfo)
    client["classrooms"][userid].update({'_id':id}, {"$set": {"desks":desks}})
    client["classrooms"][userid].update({'_id':id}, {"$set": {"students":students}})
    return {}



if __name__ == "__main__":
    app.secret_key = 'secret'
    app.run()