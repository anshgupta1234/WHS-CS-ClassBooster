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
@app.route('/classrooms/delete', methods=['POST'])
def delete():
    updateInfo = request.json
    id = ObjectId(updateInfo["ID"])
    userid = session["userID"]
    print "ID: "+userid
    myClass = client["classrooms"][userid].find_one({'_id':id})
    client["classrooms"][userid].delete_one({'_id':id})
    return {}
    
    



if __name__ == "__main__":
    app.secret_key = 'secret'
    app.run()