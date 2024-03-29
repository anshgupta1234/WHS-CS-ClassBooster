#################################
#         Setup/Imports         #
#################################
import random
from forgotPasswordEmail import emailUser
import string
from myNgrok import getNgrok

from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from passlib.hash import sha256_crypt as sha256
import requests
from pymongo import MongoClient

ngrokURL = getNgrok()
client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
database = client["creds"] 
auth = database["auth"]
emailVerifCollection = database["forgotPass"]

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}



class forgotPassGet(Resource):
    def post(self):
        args = request.get_json(force=True)
        email = auth.find_one({"username":args["username"]})["email"]
        code = "".join(random.choices(string.ascii_letters + string.digits, k=16))
        emailVerifCollection.insert_one({"email":email,"randomCode":code,"username":args['username']})
        print(code)
        user = auth.find_one({"username":args["username"]})
        auth.update_one({"username":args["username"]},{ '$set': { "email": email}})
        emailUser(email,"https://classbooster.loca.lt/forgotpassword/" + code)
        return {"success": True}, 201, [('Access-Control-Allow-Origin', '*')]

class ForgotPassPost(Resource):
    def post(self,verifCode):
        args = request.get_json(force=True)
        newpass = sha256.hash(args["password"])
        print(verifCode)
        print(emailVerifCollection.find_one({"randomCode":verifCode}))
        if emailVerifCollection.find_one({"randomCode":verifCode}) != None:
            user = auth.find_one({"username":args['username']})
            auth.update_one({"username":emailVerifCollection.find_one({"randomCode":verifCode})["username"]},{ '$set': { "password": newpass}})
        print(auth.find_one({"username":args['username']}))
        return {"success": True}, 201, [('Access-Control-Allow-Origin', '*')]

        
        

