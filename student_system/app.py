from flask import Flask, request, jsonify, render_template
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

# 存储学生数据的列表
students = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/students', methods=['GET'])
def get_students():
    # 按成绩从高到低排序
    sorted_students = sorted(students, key=lambda x: x['score'], reverse=True)
    return jsonify(sorted_students)

@app.route('/api/students', methods=['POST'])
def add_student():
    data = request.json
    
    # 验证数据
    if not all(key in data for key in ['name', 'age', 'score']):
        return jsonify({'error': '缺少必要的字段'}), 400
    
    try:
        # 转换年龄和成绩为数字
        data['age'] = int(data['age'])
        data['score'] = float(data['score'])
        
        # 添加到学生列表
        students.append(data)
        
        # 返回排序后的学生列表
        sorted_students = sorted(students, key=lambda x: x['score'], reverse=True)
        return jsonify(sorted_students), 201
    except ValueError:
        return jsonify({'error': '年龄和成绩必须是数字'}), 400

if __name__ == '__main__':
    app.run(debug=True)