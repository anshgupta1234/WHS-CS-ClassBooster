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




class login(Resource):
    def post(self):
        args = request.get_json(force=True)
        userCursor = auth.find_one({"username":args["username"]})
        if userCursor is None:
            userCursor = auth.find_one({"email":args["username"]})
        if not userCursor is None:
            print('"' + args["password"] + '"')
            print(sha256.verify(args["password"],userCursor["password"]))
            if sha256.verify(args["password"],userCursor["password"]):
                session['username'] = args["username"]
                session['userID'] = str(userCursor['_id'])
                print("session userID is "+session.get('userID'))
                print(session)
                return {"success":True}, 201, [('Access-Control-Allow-Origin', '*')]
            else:
                return {"error":"Your password is wrong :("},401, [('Access-Control-Allow-Origin', '*')]
        else:
            return {"error":"No account found with that email/username :("},401, [('Access-Control-Allow-Origin', '*')]
    def get(self):
        if 'username' in session:
            return {"username":session.get("username"),"id":session.get("userID")}, 201, [('Access-Control-Allow-Origin', '*')]
        else:
            print('You are not logged in')

