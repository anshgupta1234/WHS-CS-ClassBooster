from flask import Flask, request, session
from flask_restful import Api, Resource
import json
import pymongo
from pymongo import MongoClient
from encryptCheck import encrypt_password
from algos import main
from bson import ObjectId
BASE = "http://127.0.0.1:5000/"

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
@app.route('/shuffle', methods=['POST'])
def shuffle():
    updateInfo = request.json
    id = ObjectId(updateInfo["ID"])
    userid = session["userID"]
    print "ID: "+userid
    myClass = client["classrooms"][userid].find_one({'_id':id})
    desks = myClass["desks"]
    students = myClass["students"]
    whiteboard = myClass["whiteboard"]
    teacher = myClass["teacher"]
    pairing = main(desks, students, whiteboard, teacher)
    client["classrooms"][userid].update({'_id':id}, {"$set": {"pairings":pairing}})
    return pairing
    
    



if __name__ == "__main__":
    app.secret_key = 'secret'
    app.run()
