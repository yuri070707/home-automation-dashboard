from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # これを追加

data = {
    "temperature": 25.0,
    "humidity": 50.0
}

@app.route('/api/data/latest', methods=['GET'])
def get_latest_data():
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def update_data():
    global data
    new_data = request.json
    data['temperature'] = new_data.get('temperature', data['temperature'])
    data['humidity'] = new_data.get('humidity', data['humidity'])
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
