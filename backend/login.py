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
        print(userCursor)
        if not userCursor is None:
            print('"' + args["password"] + '"')
            print(sha256.verify(args["password"],userCursor["password"]))
            if sha256.verify(args["password"],userCursor["password"]):
                session['username'] = args["username"]
                session['userID'] = str(userCursor['_id'])
                print("session username is "+session.get('username'))
                return {"success":True},201
            else:
                return {"error":"Your password is wrong :("},401
        else:
            return {"error":"No account found with that username :("},401
    def get(self):
        if 'username' in session:
            return({"username":session.get("username"),"id":session.get("userID")})
        else:
            print('You are not logged in')

