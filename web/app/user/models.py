from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
class User:

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def signup(self):
        print(request.form)
        from app.views import db
         

        user = {
            "_id": uuid.uuid4().hex,
            "name": request.form.get('name'),
            "email": request.form.get('email'),
            "password": request.form.get('password')
        }

        user['password'] = pbkdf2_sha256.encrypt(user['password'])
        if db.user.find_one({ "email": user['email'] }):
            return jsonify({ "error": "Email address already in use" }), 400

        if db.user.insert_one(user):
            return self.start_session(user)

        return jsonify({ "error": "Signup failed" }), 400
    
    def signout(self):
        session.clear()
        return redirect('/test')
    
    def login(self):
        from app.views import db

        user = db.user.find_one({
            "email": request.form.get('email')
        })

        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            return self.start_session(user)
        
        return jsonify({ "error": "invalid login credentials" }), 401