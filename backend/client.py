import requests
import json
data = {"username":"poo","password":"nathan"}
BASE = "http://127.0.0.1:5000/"
response = requests.post(BASE + "login",json.dumps(data))
getresponse = requests.get(BASE+"login", json.dumps(data))
requests.post(BASE + "verify",json.dumps({"email":"nathanliu17@gmail.com"}))
print(response)