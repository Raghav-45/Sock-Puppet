from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

def write_json(new_data, filename='person.json'):
    with open(filename,'r+') as file:
        # First we load existing data into a dict.
        file_data = json.load(file)
        # Custom JSON Object
        new_data = ({new_data['info']['seed']: [new_data['results'][0]]})
        # Join new_data with file_data inside emp_details
        # file_data["seed_details"].append(new_data)
        file_data["seed_details"].update(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)
    
@app.route('/seed/<seed>', methods=['GET'])
def seed(seed):
    with open('person.json','r') as file:
        file_data = json.load(file)
        return file_data['seed_details'][seed]
    
@app.route('/save/', methods=['POST'])
def save():
    data = request.json
    write_json(data)
    return '200'


# main driver function
if __name__ == '__main__':
	app.run()