from flask import (jsonify,render_template, Flask, session, redirect, request)
from functools import wraps
import json
import os
from app.user import routes
from app.user.models_student import User_student
from app.user.models_teacher import User_teacher
from app.user.models_curriculum_manager import User_Curriculum_manager
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
    

@app.route('/data5')
def data5():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))
        ch = ''
        if session['type'] == '2':
            ch = session['stu']
        else:
            ch =session['user']['_id']

        data = db.student.aggregate([
            {
                "$match": {
                "_id":  ch
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
                    "credit": "$enroll.credit",
                    "year": "$enroll.year"
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

@app.route('/stu_list_all')
def stu_list_all():
    db="" 
    try:
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))

        data = db.teacher.find({ "_id": session['user']['_id'] }, { "advisee": 1, "_id": 0 })
        data= list(data)
        app.logger.debug(data)
        return jsonify(data)
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 

@app.route('/curri')
def curri():
    db=""
    try:
        db = get_db()
        # app.logger.debug(type(session["user"]["_id"]))
        app.logger.debug("***********")
        # app.logger.debug(session['user']['curriculum_year'])
        # app.logger.debug(type(session['user']['curriculum_year']))
        ch = ''
        if session['type'] == '2':
            ch = session['year']
        else:
            ch = session['user']['curriculum_year']
        data = db.curriculum.find({"_id": int(ch)})    
        data= list(data)
        app.logger.debug(data)
        app.logger.debug("***********")
        return jsonify(data)
        
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close() 



@app.route('/set_session', methods=('GET', 'POST'))
def revalue():
    db = ""
    if request.method == 'POST':
        name = request.form.get("_id")
        db = get_db()
        session['stu'] = str(name)
        studata = db.student.find_one({"_id": session['stu']})
        ch = studata["study_plan"]
        session['plan'] = ch
        session['year'] = studata['curriculum_year']
        app.logger.debug(session['stu'])
        return redirect('/teacher_home')
        
    

@app.route('/all_credit')
def all_credit():
    db=""
    app.logger.debug("AAAAAAAAAAAAAAAAAAAA")
    try:
        app.logger.debug("BBBBBBBBBBBBBBBBBBBBB")
        db = get_db()
        app.logger.debug(type(session["user"]["_id"]))
        ch = ""
        if session['type'] == "2":
            app.logger.debug("teacher here")
            studata = db.student.find_one({"_id": session['stu']})
            ch = studata["study_plan"]
        else:
            ch = session['user']['study_plan'] 
        data= "" 
        if(ch == "แผนสหกิจศึกษา"):
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
        elif(ch == "แผนปกติ"):
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
        elif(ch == "แผนก้าวหน้า"):
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
    if session['type'] == '2':
        return render_template('t_home.html')

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

@app.route('/del_stu', methods=('GET', 'POST'))
@login_required
def del_stu():
    if request.method == 'POST':
        app.logger.debug(request.form)
        db=""
        name = request.form.get('_id')
        
        app.logger.debug(name)
        
        try:
            db = get_db()
            data = db.teacher.update_one(
                        { "_id": session['user']['_id'] },  
                        { "$pull": { "advisee": name } } 
                    ) 
            return redirect('/teacher_home')
            
        except Exception as e:
            return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
        finally:
            if isinstance(db, MongoClient):
                db.close()
    return render_template('t_home.html')

@app.route('/add_sub_all', methods=('GET', 'POST'))
@login_required
def add_sub_all():
    app.logger.debug('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ')
    if request.method == 'POST':
        
        # app.logger.debug(request.form)
        
        db=""  
        try:
            db = get_db()
            
            lenn = int(len(request.form)/5)
            app.logger.debug(lenn)
            
            # for i in range(0, lenn):
            #     app.logger.debug("5")
            for i in range(0, lenn):
                app.logger.debug("1")
                app.logger.debug("AAA")
                _id = request.form.get('enroll[{}][subject_id]'.format(str(i)))
                name = request.form.get('enroll[{}][subject_name]'.format(str(i)))
                grade = request.form.get('enroll[{}][grade]'.format(str(i)))
                year = request.form.get('enroll[{}][year]'.format(str(i)))
                credit = request.form.get('enroll[{}][credit]'.format(str(i)))
                credit = int(credit) 
                grade = float(grade)
                year = int(year)
                # app.logger.debug(_id)
                # app.logger.debug(grade)
                # app.logger.debug(credit)
                # app.logger.debug(year)
                data = db.student.update_one(
                            {
                                "_id": session['user']['_id'],
                            },
                            {
                                "$push": {
                                    "enroll":{
                                        "subject_id": _id, "grade": grade, "year": year, "credit": credit
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
    

@app.route('/form2', methods=('GET', 'POST'))
@login_required
def form2():
    if request.method == 'POST':
        app.logger.debug(request.form)
        db=""
        suba = request.form.get('subj')
        name = request.form.get('subject_n')
        gradea = float(request.form.get('grade'))
        yeara = int(request.form.get('year'))
        credita = int(request.form.get('credit'))
        
        try:
            db = get_db()
            chdata = ''
            app.logger.debug("aaaaaaaaaaaaaa")
            app.logger.debug(chdata)
            chdata = db.student.find_one({"_id": session['user']['_id'], "enroll.subject_id": suba})
            app.logger.debug("aaaaaaaaaaaaa")
            app.logger.debug(chdata)
            if chdata == None:
                data = db.student.update_one(
                    {
                        "_id": session['user']['_id'],
                    },
                    {
                        "$push": {
                            "enroll":{
                                "subject_id": suba, "subject_name": name, "grade": gradea, "year": yeara, "credit": credita
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

@app.route('/teacher_home', methods=('GET', 'POST'))
def t_home():
    app.logger.debug("AAAABBB")
    app.logger.debug(session['stu'])
    
    
    app.logger.debug("EIEIEIE")
    app.logger.debug(session['stu'])
    
        

    
    
    if request.method == 'POST':
        db=""
        first = int(request.form.get('first'))
        last = int(request.form.get('last'))
        app.logger.debug(first)
        app.logger.debug(last)
        try:
            db = get_db()
            for i in range(first, last+1):
                data = db.teacher.update_one(
                    {
                        "_id": session['user']['_id']
                    },
                    {
                        "$push": {"advisee": str(i)}
                    }

                )
            return redirect('/teacher_home')
                
        except Exception as e:
            return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
        finally:
            if isinstance(db, MongoClient):
                db.close()
    
        
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
############################################################################

@app.route('/user/signup_curriculum_manager', methods=['POST'])
def signup_curriculum_manager():
    return User_Curriculum_manager().signup_curriculum()

@app.route('/user/signout_curriculum_manager')
def signout_curriculum_manager():
    return User_Curriculum_manager().signout_curriculum()

@app.route('/user/login_curriculum_manager', methods=['POST'])
def login_curriculum_manager():
    return User_Curriculum_manager().login_curriculum()




