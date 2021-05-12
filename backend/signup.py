#################################
#         Setup/Imports         #
#################################
import random
from verifyEmail import emailUser
import string
from myNgrok import getNgrok

from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from passlib.hash import sha256_crypt as sha256
import requests
from pymongo import MongoClient

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
database = client["creds"] 
auth = database["auth"]
emailVerifCollection = database["verification"]

ngrokURL = getNgrok()
app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}


class signup(Resource):
    def post(self):
        args = request.get_json(force=True)
        if auth.find_one({"username":args["username"]}) != None:
            return({"error":"An account already exists with that username."})
        elif auth.find_one({"email":args["email"]}) != None:
            return({"error":"An account already exists with that email."})

        encryptedPass1 = sha256.hash(args["password"])
        auth.insert_one({"username":args["username"],"password":encryptedPass1, "email":args["email"], "verified":False})
        #send verification email here vvv
        email = auth.find_one({"username":args["username"]})["email"]
        print(email)
        code = "".join(random.choices(string.ascii_letters + string.digits, k=16))
        emailVerifCollection.insert_one({"email":email,"randomCode":code,"username":args["username"]})
        print(code)
        user = auth.find_one({"username":args["username"]})
        auth.update_one({"username":args["username"]},{ '$set': { "email": args["email"]}})
        emailUser(email,ngrokURL+'/verify/' + code)
        return {"success":True},201, [('Access-Control-Allow-Origin', '*')]