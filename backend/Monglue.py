#################################
#         Setup/Imports         #
#################################
from signup import signup
from verify import verifyGet,verifyPost
from login import login
from addclassroom import add
from forgotPassword import forgotPassGet, ForgotPassPost
from flask import Flask,request,render_template, session
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with

app = Flask(__name__)
app.secret_key = "7de9ca677c2eb20b961ee9cf8be15220"
api = Api(app)
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

app.run(debug = True)