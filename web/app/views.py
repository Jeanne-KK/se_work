from flask import (jsonify,render_template, Flask, session, redirect)
from functools import wraps
import json
import os
from app.user import routes
from app.user.models_student import User_student
from app.user.models_teacher import User_teacher
import pymongo
from pymongo import MongoClient


app = Flask(__name__, static_folder='static')
app.secret_key = 'sethebest'
#Database
client = MongoClient(host='test_mongodb',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
db = client["test_db"]

# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/home')
        
    return wrap




@app.route('/')
def home():
    return "Bank says: 'Hello World!'"

@app.route('/db/')
def db_connection():
    # Define the path to check.student.json
    json_file_path = os.path.join(app.root_path, 'model', 'check.student.json')

    # Read the JSON data from check.student.json
    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)

        # Pretty-print the JSON for better readability
        formatted_data = json.dumps(data, indent=4)

        return "<pre>{}</pre>".format(formatted_data)
    except FileNotFoundError:
        return f'<h1>JSON file not found at {json_file_path}</h1>'
    


@app.route('/home')
def homepage():
    return render_template('home.html')

@app.route('/overview')
def overview():
    return render_template('overview.html')

@app.route('/teacher_home')
def t_home():
    return render_template('t_home.html')

@app.route('/subject_credit')
def s_credit():
    return render_template('sj_credit.html')

@app.route('/subject_add')
def s_add():
    return render_template('subject_add.html')

@app.route('/subject_list')
def s_list():
    return render_template('subject_list.html')

@app.route('/student_reg')
def s_reg():
    return render_template('regist_s.html')

@app.route('/teacher_reg')
def t_reg():
    return render_template('regist_t.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/who')
def who():
    return render_template('who.html')





@app.route('/dashb')
@login_required
def dashb():
    return render_template('dashboard.html')


@app.route('/user/signup_student', methods=['POST'])
def signup_student():
    return User_student().signup_student()

@app.route('/user/signout_student')
def signout_student():
    return User_student().signout_student()

@app.route('/user/login_student', methods=['POST'])
def login_student():
    return User_student().login_student()
##########################################################################
@app.route('/user/signup_teacher', methods=['POST'])
def signup_teacher():
    return User_teacher().signup_teacher()

@app.route('/user/signout_teacher')
def signout_teacher():
    return User_teacher().signout_teacher()

@app.route('/user/login_teacher', methods=['POST'])
def login_teacher():
    return User_teacher().login_teacher()






