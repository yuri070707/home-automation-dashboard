from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# グローバル変数としてデータを保存
data_store = {"temperature": 25.0, "humidity": 50.0}

@app.route('/api/data/latest', methods=['GET'])
def get_latest_data():
    return jsonify(data_store)

@app.route('/api/data', methods=['POST'])
def post_data():
    global data_store
    data = request.json
    data_store = data  # 受信したデータを更新
    print("Received data:", data)  # ここで受信したデータをログに表示
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=True)
