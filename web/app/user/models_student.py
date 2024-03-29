from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
class User_student:

    def start_session_student(self, user):
        session['logged_in'] = True
        session['user'] = user
        session['type'] = "1"
        
        return jsonify(user), 200


    def signup_student(self):
        print(request.form)
        from app.views import db
         

        user = {
            "_id": request.form.get('_id'),
            "first_name": request.form.get('first_name'),
            "last_name": request.form.get('last_name'),
            "year_of_study": request.form.get('year_of_study'),
            "study_plan": "แผนปกติ",
            "minor": "ไม่เลือกวิชาโท",
            "curriculum_year": "หลักสูตรปรับปรุง 2564",
            "cmu_acc": request.form.get('cmu_acc'),
            "pass": request.form.get('pass'),
            "enroll": [] 
        }
        user['pass'] = pbkdf2_sha256.encrypt(user['pass'])
        if db.student.find_one({ "cmu_acc": user['cmu_acc'] }):
            return jsonify({ "error": "Email address already in use" }), 400

        if db.student.insert_one(user):
            return self.start_session_student(user)

        return jsonify({ "error": "Signup failed" }), 400

    def signout_student(self):
        session.clear()
        return redirect('/home')
    

    def login_student(self):
        from app.views import db

        user = db.student.find_one({
            "cmu_acc": request.form.get('cmu_acc')
        })

        if user and pbkdf2_sha256.verify(request.form.get('pass'), user['pass']):
            return self.start_session_student(user)
        
        return jsonify({ "error": "Invalid login credentials" }), 401
        
