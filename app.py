from flask import Flask, request
import requests
import json

app = Flask(__name__)

def fetchUser(gender, nationality):
    res = requests.get(f'https://randomuser.me/api/?gender={gender}&nat={nationality}&password=upper,lower,number,special,8-12&format=json')
    response = json.loads(res.text)
    return response

@app.route('/puppet/', methods=['GET'])
def hello_world():
    gender = request.args.get('gender', default = '', type = str)
    nationality = request.args.get('nationality', default = 'us', type = str)
    return fetchUser(gender, nationality)

@app.route('/seed/<seed>', methods=['GET'])
def seed(seed):
    return json.loads(requests.get(f'https://randomuser.me/api/?seed={seed}&nat=in&format=json&password=upper,lower,number,special,8-12').text)

# main driver function
if __name__ == '__main__':
	app.run()