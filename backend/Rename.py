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
@app.route('/classrooms/rename', methods=['POST'])
def rename():
    updateInfo = request.json
    id = ObjectId(updateInfo["ID"])
    name = updateInfo["name"]
    nick = updateInfo["nick"]
    userid = session["userID"]
    print "ID: "+userid
 
    client["classrooms"][userid].update({'_id':id}, {"$set": {"name":name}})
    client["classrooms"][userid].update({'_id':id}, {"$set": {"nick":nick}})

    return {}
    




if __name__ == "__main__":
    app.secret_key = 'secret'
    app.run()