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
    data = fetchUser(gender, nationality)
    write_json(data)
    return data['results']

def write_json(new_data, filename='person.json'):
    with open(filename,'r+') as file:
        # First we load existing data into a dict.
        file_data = json.load(file)
        # Custom JSON Object
        new_data = ({new_data['info']['seed']: [new_data['results'][0]]})
        # Join new_data with file_data inside emp_details
        file_data["seed_details"].append(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)
    
@app.route('/seed/<seed>', methods=['GET'])
def seed(seed):
    with open('person.json','r') as file:
        file_data = json.load(file)[str(seed)]
        return file_data
    # return json.loads(requests.get(f'https://randomuser.me/api/?seed={seed}&nat=in&format=json&password=upper,lower,number,special,8-12').text)

# main driver function
if __name__ == '__main__':
	app.run()