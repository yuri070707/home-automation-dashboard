from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # これにより、すべてのオリジンからのリクエストが許可されます

@app.route('/api/data/latest', methods=['GET'])
def get_latest_data():
    data = {"temperature": 25.0, "humidity": 50.0}
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.json
    print("Received data:", data)
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=True)
