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
import dnspython
from pymongo import MongoClient

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
database = client["nathan"] 
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
                print("session username is "+session.get('username'))
                return "Signed In.",201
            else:
                return 401
        else:
            return 401
    def get(self):
        if 'username' in session:
            return({"username":session.get("username")})
        else:
            print('You are not logged in')

