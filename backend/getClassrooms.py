from flask import Flask, request, session
from flask_restful import Api, Resource
import json
import requests
import pymongo
from pymongo import MongoClient
import login
from bson import ObjectId
from bson import json_util
BASE = "http://127.0.0.1:5000/"

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")

app = Flask(__name__)
@app.route('/classrooms/get', methods=['POST'])
def get():

    updateInfo = request.json
    classID = ObjectId(updateInfo["ID"])
    userid = session.get("userID")
    print "ID: " +userid
    
    
    myClass = client["classrooms"][userid].find_one({'_id':classID})
    print myClass
    return json.loads(json_util.dumps(myClass))

@app.route('/classrooms/getAll', methods=['GET'])
def getALL():
    userid = session.get("userID")
    print "ID: " +userid
    classes = list(client["classrooms"][userid].find({}))
    classNames = list()
    for thing in classes:
        name = thing["name"]
        nick = thing["nick"]
        className = {"name": name, "nick": nick}
        
        
        print className
        classNames.append(className)
    return {"classes": classNames}


    


if __name__ == "__main__":
    app.secret_key = 'secret'
    app.run()