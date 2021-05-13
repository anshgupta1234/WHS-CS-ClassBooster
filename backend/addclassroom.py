from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from passlib.hash import sha256_crypt as sha256
import requests
from pymongo import MongoClient

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
classroomsdb = client["classrooms"]

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}


class add(Resource):
    def post(self):
        args = request.get_json(force=True)
        userID = None
        print(session)
        if 'username' in session:
            userID = session.get("userID")
            print(userID)
        else:
            return {"error": "You are not logged in"}
        classroomsdb[userID].insert_one(args)
        print(classroomsdb[userID].find_one())
        return { "success": True }, 201
