from flask import Flask
import requests
import json

app = Flask(__name__)

@app.route('/puppet')
def hello_world():
	return 'Hello World'

res = requests.get('paste your link here')
response = json.loads(res.text)

# main driver function
if __name__ == '__main__':
	app.run()