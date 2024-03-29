from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
class User_teacher:

    def start_session_teacher(self, user):
        session['logged_in'] = True
        session['user'] = user
        session['type'] = "2"
        session['stu'] = ""
        session['plan'] = ""
        session['year'] = ""
        session['minor'] = ""
        
        return jsonify(user), 200


    def signup_teacher(self):
        print(request.form)
        from app.views import db
         

        user = {
            "_id": request.form.get('cmu_acc'),
            "first_name": request.form.get('first_name'),
            "last_name": request.form.get('last_name'),
            "pass": request.form.get('pass'),
            "advisee": []
        }
        user['pass'] = pbkdf2_sha256.encrypt(user['pass'])

        if db.teacher.find_one({ "_id": user['_id'] }):
            return jsonify({ "error": "Email address already in use" }), 400

        if db.teacher.insert_one(user):
            return self.start_session_teacher(user)

        return jsonify({ "error": "Signup failed" }), 400

    def signout_teacher(self):
        session.clear()
        return redirect('/home')
    

    def login_teacher(self):
        from app.views import db

        user = db.teacher.find_one({
            "_id": request.form.get('cmu_acc')
        })

        if user and pbkdf2_sha256.verify(request.form.get('pass'), user['pass']):
            return self.start_session_teacher(user)
        
        return jsonify({ "error": "Invalid login credentials" }), 401
        
