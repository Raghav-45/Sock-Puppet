from flask import Flask, request
from flask_cors import CORS
import json
import random
import csv
import requests

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

def genAddress():
    addr = ''
    # with open('../Frontend/SockPuppet/src/assets/addresses_us.json','r') as file:
    with open('file.json','r') as file:
        address_data = json.load(file)
        # addr = address_data['addresses'][random.randint(0, len(address_data['addresses']))]
        addr = address_data[random.randint(1, 7999)]
    
    return addr

class Puppet:
    def __init__(self):
        pup = 'str'
    
    def fetchUser(self, gender, nationality):
        res = requests.get(f'https://randomuser.me/api/?gender={gender}&nat={nationality}&password=upper,lower,number,special,8-12&format=json')
        response = json.loads(res.text)
        return response
    
    def Generate(self, gender, nat):
        da = genAddress()
        dd = {
            "d5a4012dfe42345c": [
                {
                    "gender": da['Gender'],
                    "Name": {
                        "Title": da['Title'],
                        "GivenName": da['GivenName'],
                        "MiddleInitial": da['MiddleInitial'],
                        "SurName": da['Surname']
                    },
                    "Location": {
                        "StreetAddress": da['StreetAddress'],
                        "City": da['City'],
                        "State": da['State'],
                        "State": {
                            "Short": da['State'],
                            "Full": da['StateFull']
                        },
                        "Country": {
                            "Short": da['Country'],
                            "Full": da['CountryFull']
                        },
                        "ZipCode": da['ZipCode'],
                        "Coordinates": {
                            "Latitude": da['Latitude'],
                            "Longitude": da['Longitude']
                        },
                        "timezone": {
                            "offset": "-4:00",
                            "description": "Atlantic Time (Canada), Caracas, La Paz"
                        }
                    },
                    "Email": da['EmailAddress'],
                    "login": {
                        "uuid": "688404d8-eef4-4b70-a26f-1a13c855f7a7",
                        "username": "heavyostrich547",
                        "password": "`H!HU)zjf~",
                        "salt": "39tQDdNl",
                        "md5": "8fd1876f7ab417e56fdb1b9acbff594a",
                        "sha1": "0a1c05fe364b571686ce773646dfb58e57d50317",
                        "sha256": "35484871ef2a710282d9609623e197cb19367bfaf25756e7e5833eccf9866440"
                    },
                    "DOB": {
                        "Datefull": da['Birthday'],
                        "Age": da['Age']
                    },
                    "phone": "(932) 236-0965",
                    "cell": "(949) 844-3802",
                    "Telephone": '+' + da['TelephoneCountryCode'] + ' ' + da['TelephoneNumber'],
                    "id": {
                        "name": "SSN",
                        "value": "771-56-4120"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/20.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
                    },
                    "Nationality": da['CountryFull'],
                    "BrowserUserAgent": da['BrowserUserAgent'],
                    "dat": da
                }
            ]
        }
        return dd
    
    def Seed(self, seed):
        return 'tst'

@app.route('/puppet/<seed>')
def puppet(seed):
    return Puppet().Generate('male', 'us')

# main driver function
if __name__ == '__main__':
	app.run()