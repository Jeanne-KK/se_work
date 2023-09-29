from flask import (jsonify,render_template, Flask, session, redirect, request)
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


def get_db():
    client = MongoClient(host='test_mongodb',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
    db = client["test_db"]
    return db

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
    

@app.route('/data1')
def data1():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$match": {
                "_id": session['user']['_id'] 
                }
            },
            {
                "$unwind": "$enroll"
            },
            {
                "$match": {
                "enroll.year": 1
                }
            },
            {
                "$group": {
                "_id": "null",
                "subjects": {
                    "$push": {
                    "subject_id": "$enroll.subject_id",
                    "grade": "$enroll.grade",
                    "credit": "$enroll.credit"
                    }
                }
                }
            },
            {
                "$project": {
                "_id": 0,
                "subjects": 1
                }
            }
            ]) 
        
        
        app.logger.debug("****************************")
        #app.logger.debug(data)
        app.logger.debug("****************************")
        data_= []
        for i in data: 
            data_ += i["subjects"]
            app.logger.debug(i["subjects"])
            
        return jsonify(data_)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/data2')
def data2():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$match": {
                "_id": session['user']['_id'] 
                }
            },
            {
                "$unwind": "$enroll"
            },
            {
                "$match": {
                "enroll.year": 2
                }
            },
            {
                "$group": {
                "_id": "null",
                "subjects": {
                    "$push": {
                    "subject_id": "$enroll.subject_id",
                    "grade": "$enroll.grade",
                    "credit": "$enroll.credit"
                    }
                }
                }
            },
            {
                "$project": {
                "_id": 0,
                "subjects": 1,
                
                }
            }
            ]) 
        
        
        app.logger.debug("****************************")
        #app.logger.debug(data)
        app.logger.debug("****************************")
        data_= []
        for i in data: 
            data_ += i["subjects"]
            app.logger.debug(i["subjects"])
            
        return jsonify(data_)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/data3')
def data3():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$match": {
                "_id": session['user']['_id'] 
                }
            },
            {
                "$unwind": "$enroll"
            },
            {
                "$match": {
                "enroll.year": 3
                }
            },
            {
                "$group": {
                "_id": "null",
                "subjects": {
                    "$push": {
                    "subject_id": "$enroll.subject_id",
                    "grade": "$enroll.grade",
                    "credit": "$enroll.credit"
                    }
                }
                }
            },
            {
                "$project": {
                "_id": 0,
                "subjects": 1
                }
            }
            ]) 
        
        
        app.logger.debug("****************************")
        #app.logger.debug(data)
        app.logger.debug("****************************")
        data_= []
        for i in data: 
            data_ += i["subjects"]
            app.logger.debug(i["subjects"])
            
        return jsonify(data_)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 



@app.route('/data4')
def data4():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$match": {
                "_id": session['user']['_id'] 
                }
            },
            {
                "$unwind": "$enroll"
            },
            {
                "$match": {
                "enroll.year": 4
                }
            },
            {
                "$group": {
                "_id": "null",
                "subjects": {
                    "$push": {
                    "subject_id": "$enroll.subject_id",
                    "grade": "$enroll.grade",
                    "credit": "$enroll.credit"
                    }
                }
                }
            },
            {
                "$project": {
                "_id": 0,
                "subjects": 1
                }
            }
            ]) 
        
        
        app.logger.debug("****************************")
        #app.logger.debug(data)
        app.logger.debug("****************************")
        data_= []
        for i in data: 
            data_ += i["subjects"]
            app.logger.debug(i["subjects"])
            
        return jsonify(data_)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/data5')
def data5():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$match": {
                "_id": session['user']['_id'] 
                }
            },
            {
                "$unwind": "$enroll"
            }, 
            {
                "$group": {
                "_id": "null",
                "subjects": {
                    "$push": {
                    "subject_id": "$enroll.subject_id",
                    "grade": "$enroll.grade",
                    "credit": "$enroll.credit"
                    }
                }
                }
            },
            {
                "$project": {
                "_id": 0,
                "subjects": 1
                }
            }
            ]) 
        
        
        app.logger.debug("****************************")
        #app.logger.debug(data)
        app.logger.debug("****************************")
        data_= []
        for i in data: 
            data_ += i["subjects"]
            app.logger.debug(i["subjects"])
            
        return jsonify(data_)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/tadvisee')
def tadvisee():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
            {
                "$lookup":{
                    "from": "teacher",
                    "localField": "_id",
                    "foreignField": "advisee",
                    "as": "teacherad"
                }
            },
            {
                "$match":{
                    "_id": session['user']['_id']
                }
            },
            {
                "$project":{
                    "_id": 0,	
                    "teacherad": {
                        "first_name": 1,
                        "last_name": 1
                    }
                }
            },
            
        ]); 
        
        
        
        data_= []
        for i in data:
            data_ += i["teacherad"]
            
            
        app.logger.debug("****************************")
        
        app.logger.debug("****************************")
        return jsonify(data_)
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close()

@app.route('/avggrade')
def avggrade():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.student.aggregate([
                {
                    "$match": { "_id": session['user']['_id'] } 
                },
                {
                    "$unwind": "$enroll" 
                },
                {
                    "$group": {
                    "_id": "null", 
                    "totalWeightedGrade": { "$sum": { "$multiply": ["$enroll.grade", "$enroll.credit"] } }, 
                    "totalCredits": { "$sum": "$enroll.credit" } 
                    }
                },
                {
                    "$project": {
                    "_id": 0,
                    "weightedAverageGrade": { "$divide": ["$totalWeightedGrade", "$totalCredits"] }
                    }
                },
                {
                   "$project": {
                    "Grade": { "$round": ["$weightedAverageGrade", 3] } 
                    }
                }
        ]);

                
                        
        
        data = list(data) 
        
        app.logger.debug("****************************")  
        app.logger.debug(data[0]["Grade"])
        app.logger.debug("****************************")

           
        return jsonify(data)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/stu_list')
def stu_list():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.teacher.aggregate([
                    {
                        "$match": { "_id": session['user']['_id'] }
                    },
                    {
                        "$lookup": {
                        "from": "student",
                        "localField": "advisee",
                        "foreignField": "_id",
                        "as": "student_ad"
                        }
                    },
                    {
                        "$project": {
                        "_id": 0,
                        "student_ad": {
                            "_id": 1,
                            "first_name": 1,
                            "last_name": 1,
                            "study_plan": 1
                        }
                        }
                    },
                    {
                        "$unwind": "$student_ad"
                    },
                    {
                        "$sort": {
                        "student_ad._id": 1 
                        }
                    }
                ]);                
                        
        data = list(data) 
        
        
        
           
        return jsonify(data)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/all_credit')
def all_credit():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))
        
        data= "" 
        if(session['user']['study_plan'] == "แผนสหกิจศึกษา"):
            data = db.curriculum.aggregate([
                    {
                        "$project": {
                        "วิชาบังคับ": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.วิชาบังคับ.หน่วยกิต"
                        },
                        "GE": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.GE_Elective.หน่วยกิต"
                        },
                        "วิชาแกน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาแกน.หน่วยกิต"
                        },
                        "เอกบังคับร่วม": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับร่วม.หน่วยกิต"
                        },
                        "เอกประจำแผน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับประจำแผน.แผนสหกิจศึกษา.หน่วยกิต"
                        },
                        "เอกเลือก": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนสหกิจศึกษา.หน่วยกิต"
                        },
                        "400": { 
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนก้าวหน้า.เงื่อนไข.400"
                        },
                        "โท": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาโท.หน่วยกิต"
                        },
                        "เสรี": {
                            "$sum": "$หมวด.เสรี.หน่วยกิต"
                        }
                        
                        }
                    }
                    ])
        elif(session['user']['study_plan'] == "แผนปกติ"):
            data = data = db.curriculum.aggregate([
                    {
                        "$project": {
                        "วิชาบังคับ": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.วิชาบังคับ.หน่วยกิต"
                        },
                        "GE": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.GE_Elective.หน่วยกิต"
                        },
                        "วิชาแกน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาแกน.หน่วยกิต"
                        },
                        "เอกบังคับร่วม": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับร่วม.หน่วยกิต"
                        },
                        "เอกประจำแผน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับประจำแผน.แผนปกติ.หน่วยกิต"
                        },
                        "เอกเลือก": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนปกติ.หน่วยกิต"
                        },
                        "400": { 
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนก้าวหน้า.เงื่อนไข.400"
                        },
                        "โท": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาโท.หน่วยกิต"
                        },
                        "เสรี": {
                            "$sum": "$หมวด.เสรี.หน่วยกิต"
                        }
                        
                        }
                    }
                    ]) 
        elif(session['user']['study_plan'] == "แผนก้าวหน้า"):
            data = data = db.curriculum.aggregate([
                    {
                        "$project": {
                        "วิชาบังคับ": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.วิชาบังคับ.หน่วยกิต"
                        },
                        "GE": {
                            "$sum": "$หมวด.วิชาศึกษาทั่วไป.GE_Elective.หน่วยกิต"
                        },
                        "วิชาแกน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาแกน.หน่วยกิต"
                        },
                        "เอกบังคับร่วม": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับร่วม.หน่วยกิต"
                        },
                        "เอกประจำแผน": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกบังคับประจำแผน.แผนก้าวหน้า.หน่วยกิต"
                        },
                        "เอกเลือก": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนก้าวหน้า.หน่วยกิต"
                        },
                        "400": { 
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนก้าวหน้า.เงื่อนไข.400"
                        },
                        "700": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาเอก.วิชาเอกเลือก.แผนก้าวหน้า.เงื่อนไข.700"
                        },
                        "โท": {
                            "$sum": "$หมวด.วิชาเฉพาะ.วิชาโท.หน่วยกิต"
                        },
                        "เสรี": {
                            "$sum": "$หมวด.เสรี.หน่วยกิต"
                        }
                        
                        }
                    }
                    ]) 
        app.logger.debug("****************************")
        app.logger.debug(type(data))
        app.logger.debug("****************************")
        data = list(data)
                        
              
            
        return jsonify(data)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/home')
def homepage():
    return render_template('home.html')

@app.route('/student_reg')
def s_reg():
    return render_template('regist_s.html')

@app.route('/overview', methods=('GET', 'POST'))
@login_required
def overview():
    if request.method == 'POST':
        app.logger.debug(request.form)
        db=""
        name = request.form.get('subj')
        try:
            db = get_db()
            data = db.student.update_one(
                    { "_id": session['user']['_id'] },
                    { "$pull": { "enroll": { "subject_id": name } } }
                    ) 
            return redirect('/overview')
            
        except Exception as e:
            return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
        finally:
            if isinstance(db, MongoClient):
                db.close()
    return render_template('overview.html')

@app.route('/form2', methods=('GET', 'POST'))
@login_required
def form2():
    if request.method == 'POST':
        app.logger.debug(request.form)
        db=""
        suba = request.form.get('subj')
        gradea = int(request.form.get('grade'))
        yeara = int(request.form.get('year'))
        credita = int(request.form.get('credit'))
        
        try:
            db = get_db()
            data = db.student.update_one(
                {
                    "_id": session['user']['_id'],
                },
                {
                    "$push": {
                        "enroll":{
                            "subject_id": suba, "grade": gradea, "year": yeara, "credit": credita
                        }
                    }
                }
            )
            return redirect('/overview')
            
        except Exception as e:
            return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
        finally:
            if isinstance(db, MongoClient):
                db.close()
    return render_template('overview.html')

@app.route('/subject_credit')
@login_required
def s_credit(): 
    return render_template('sj_credit.html')


@app.route('/teacher_reg')
def t_reg():
    return render_template('regist_t.html')

@app.route('/teacher_home')
def t_home():
    return render_template('t_home.html')




@app.route('/subject_add')
def s_add():
    return render_template('subject_add.html')



@app.route('/test')
def test():
    return render_template('test.html')
@app.route('/subject_list')
def s_list():
    return render_template('subject_list.html')






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






#า
