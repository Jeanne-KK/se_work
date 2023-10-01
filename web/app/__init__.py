import os
from flask import Flask, jsonify, render_template
import pymongo
from pymongo import MongoClient
from app.views import app
#Routes




# Set your MongoDB URI
def get_db():
    client = MongoClient(host='test_mongodb',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
    db = client["test_db"]
    return db




app.config['SECRET_KEY'] = 'a8112ea716969327fc2a49fc8dd0e2ca9fa484033e771552'
app.config['JSON_AS_ASCII'] = False
app.config['DEBUG'] = True

# This ensures that Flask won't track modifications to the MongoDB


# Optional: Uncomment these lines if you want to use SQLAlchemy (not needed for MongoDB)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL", "sqlite://")
# db = SQLAlchemy(app)

from app import views  # noqa

@app.route("/check")
def check():
    db=""
    app.logger.debug("*AAAAAAAAAAAAAAAAAAAAAAA******")
    try:
        db = get_db()
        tea = db.teacher.find()
        teacher = [{"_id": teac["_id"], "first_name:": teac["first_name"]} for teac in tea]
        
        return jsonify({"teachers": teacher})
    except:
        pass
    finally:
        if type(db)==MongoClient:
            db.close()

@app.route("/check_test")
def check_test():
    db = ""  # Initialize db to None to handle exceptions correctly
    app.logger.debug("*BBBBBBBBBBBBBBBBBBBBBB******")
    try:
        db = get_db()
        use = db.user.find()
        user = [{"_id": u["_id"], "name": u["name"], "email": u["email"]} for u in use]
        
        return jsonify({"user": user})  # Return a valid JSON response
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close()

@app.route("/check_student")
def check_student():
    db = ""  # Initialize db to None to handle exceptions correctly
    app.logger.debug("*BBBBBBBBBBBBBBBBBBBBBB******")
    try:
        db = get_db()
        use = db.student.find()
        user = [{"_id": u["_id"], "first_name": u["first_name"], "last_name": u["last_name"], "cmu_acc": u["cmu_acc"]} for u in use]
        
        return jsonify({"user": user})  # Return a valid JSON response
    except Exception as e:
        return jsonify({"errors": str(e)}), 500  # Return an error response with a 500 status code
    finally:
        if isinstance(db, MongoClient):
            db.close()

@app.route("/check_teacher")
def check_teacher():
    db=""
    app.logger.debug("*AAAAAAAAAAAAAAAAAAAAAAA******")
    try:
        db = get_db()
        tea = db.teacher.find()
        teacher = [{"_id": teac["_id"], "first_name:": teac["first_name"]} for teac in tea]
        
        return jsonify({"teachers": teacher})
    except:
        pass
    finally:
        if type(db)==MongoClient:
            db.close()




@app.route("/insert")
def insert():
    try:
        db = get_db()  # Assuming you have a function to get the MongoDB connection
        data = db.teacher.insert_one(
            {
                "_id": "0004",
                "first_name": "Naorat",
                "last_name": "Paithon",
                "cmu_acc": "maorat.ac.th",
                "pass": "1234",
                "advisee": ['555555', '640510666']  # Note: Advised should be a list, not a string
            }
        )
        return "success"  # Return a response indicating success
    except Exception as e:
        return f"Error: {str(e)}"  # Return an error message if an exception occurs
    finally:
        if 'db' in locals() and isinstance(db, MongoClient):
            db.close()

