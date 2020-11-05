from flask import Flask, jsonify, request, fields, marshal_with
import hashlib import sha256


app = Flask(__name__)
app = Flask(__name__)
api = Api(app)
acctDB = {{"Username":"johncena123","Password" : "4fc5597c56c28a1f8079232a2736e68637634ae2"}}


@app.route("/")
class account(Resource):
    def get(self,user,passw):
    def post(self):