#################################
#         Setup/Imports         #
#################################
import random
from verifyEmail import emailUser
import string

from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from passlib.hash import sha256_crypt as sha256
import requests
from pymongo import MongoClient

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
database = client["creds"] 
auth = database["auth"]
emailVerifCollection = database["verification"]

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}



class verifyPost(Resource):
    def post(self):
        email = auth.find_one({"username":session.get('username')})["email"]
        print(email)
        code = "".join(random.choices(string.ascii_letters + string.digits, k=16))
        emailVerifCollection.insert_one({"email":email,"randomCode":code,"username":session.get('username')})
        print(code)
        user = auth.find_one({"username":session.get('username')})
        auth.update_one({"username":session.get('username')},{ '$set': { "email": email}})
        emailUser(email,"https://fcc11b77e607.ngrok.io/verify/" + code)
        return {"success": True}

class verifyGet(Resource):
    def get(self,verifCode):
        print(verifCode)
        print(emailVerifCollection.find_one({"randomCode":verifCode}))
        if emailVerifCollection.find_one({"randomCode":verifCode}) != None:
            user = auth.find_one({"username":session.get('username')})
            auth.update_one({"username":emailVerifCollection.find_one({"randomCode":verifCode})["username"]},{ '$set': { "verified": True}})
        print("verifyget")
        print(auth.find_one({"username":session.get('username')}))

        
        

