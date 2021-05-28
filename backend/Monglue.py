#################################
#         Setup/Imports         #
#################################
from signup import signup
from verify import verifyGet,verifyPost
from login import login
from logout import logout
from addclassroom import add
from forgotPassword import forgotPassGet, ForgotPassPost
from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_cors import CORS
from Update import update
from Rename import rename
from Delete import delete
from shuffle import shuffle
from getClassrooms import get
from getClassrooms import getAll 

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
@app.before_request
def setup():
    session.permanent = True
api = Api(app)
@app.after_request
def apply_caching(response):
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Origin'] = 'https://classbooster.tech/'
    response.headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept, x-auth, Bypass-Tunnel-Reminder"
    return response
resourcefields = {
    'username' : fields.String,
    'password' : fields.String
}

api.add_resource(verifyPost, "/verify")
api.add_resource(verifyGet,"/verify/<string:verifCode>")
api.add_resource(login, "/login")
api.add_resource(signup, "/signup")
api.add_resource(add,"/classrooms/add")
api.add_resource(forgotPassGet,"/forgotpassword")
api.add_resource(ForgotPassPost,"/forgotpassword/<string:verifCode>")
api.add_resource(logout,"/logout")
api.add_resource(update, "/classrooms/update")
api.add_resource(rename, "/classrooms/rename")
api.add_resource(delete, "/classrooms/delete")
api.add_resource(shuffle, "/shuffle")
api.add_resource(get, "/classrooms/get")
api.add_resource(getAll, "/classrooms/getAll")

app.run(debug = True, host = '0.0.0.0', port = 2022)