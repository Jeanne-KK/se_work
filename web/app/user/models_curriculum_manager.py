from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
class User_Curriculum_manager:

    def start_session_curriculum(self, user):
        session['logged_in'] = True
        session['user'] = user
        session['type'] = "2"
        
        return jsonify(user), 200


    def signup_curriculum(self):
        print(request.form)
        from app.views import db
         

        user = {
            "_id": request.form.get('cmu_acc'),
            "first_name": request.form.get('first_name'),
            "last_name": request.form.get('last_name'),
            "pass": request.form.get('pass')
        }
        user['pass'] = pbkdf2_sha256.encrypt(user['pass'])

        if db.curriculum_manager.find_one({ "_id": user['_id'] }):
            return jsonify({ "error": "Email address already in use" }), 400

        if db.curriculum_manager.insert_one(user):
            return self.start_session_curriculum(user)

        return jsonify({ "error": "Signup failed" }), 400

    def signout_curriculum(self):
        session.clear()
        return redirect('/home')
    

    def login_curriculum(self):
        from app.views import db

        user = db.curriculum_manager.find_one({
            "_id": request.form.get('cmu_acc')
        })

        if user and pbkdf2_sha256.verify(request.form.get('pass'), user['pass']):
            return self.start_session_curriculum(user)
        
        return jsonify({ "error": "Invalid login credentials" }), 401
        
