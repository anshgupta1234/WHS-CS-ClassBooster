#################################
#         Setup/Imports         #
#################################
import random
from verifyEmail import emailUser
import string

from flask import Flask, request, render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from passlib.hash import sha256_crypt as sha256
import requests
from pymongo import MongoClient

client = MongoClient("mongodb+srv://ansh:ClassBooster@cluster0.uefsc.mongodb.net/Cluster0?retryWrites=true&w=majority")
database = client["creds"] 
auth = database["auth"]
emailVerifCollection = database["verification"]




class logout(Resource):
    def get(self):
        session.clear()
        return {"success":True},200, [('Access-Control-Allow-Origin', '*')]