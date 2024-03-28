from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins = '*')

@app.route("/")
def welcome():
    return 'Welcome to the darkness of the backend 💀'

@app.route("/api/users", methods = ['GET'])
def test_users():
    return jsonify(
        {
            "users": [
                'silicon',
                'volley'
            ]
        }
    )

if __name__ == '__main__':
    app.run(debug = True, port = 8080)