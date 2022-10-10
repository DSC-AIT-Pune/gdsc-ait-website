from copy import copy

from turtle import title
from flask import Flask, render_template, redirect, url_for, request
from flask import Flask, redirect, render_template,request,session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import false, true
import json
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired, Email, Length
from flask_sqlalchemy  import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
#from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Blueprint, render_template, request, flash, redirect, url_for
#from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
#from . import db
from flask_login import login_user, login_required, logout_user, current_user




with open('templates\config.json', 'r') as c:
    params = json.load(c)["params"]

auth = Blueprint('auth', __name__)
app = Flask(__name__)
app.secret_key = 'super-secret-key'
app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = '465',
    MAIL_USE_SSL = True,
    MAIL_USERNAME = params['gmail-user'],
    MAIL_PASSWORD=  params['gmail-password']
)




app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/kisan_kart'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = true
db = SQLAlchemy(app)

class cards(db.Model):
    type = db.Column(db.String(50),primary_key = True, nullable=False)
    contact = db.Column(db.Integer(), nullable=False)
    adress = db.Column(db.String(50), nullable=False)
    slug = db.Column(db.String(25), nullable=false)
class users(db.Model):
    Username = db.Column(db.String(50), primary_key = True, nullable=False)
    password = db.Column(db.String(50), nullable = false)
    


#class LoginForm(FlaskForm):
#    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
#    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])
#    remember = BooleanField('remember me')
#
#class RegisterForm(FlaskForm):
#    email = StringField('email', validators=[InputRequired(), Email(message='Invalid email'), Length(max=50)])
#    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
#    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])

@app.route("/")
def index():

    return render_template('index.html')

@app.route("/login" , methods=['GET', 'POST'])
def login():
    email = request.form.get("uname")
    password = request.form.get("upass")
    posts = cards.query.filter_by().all()

    user = users.query.filter_by(Username = email).first()
    if user:
        #if check_password_hash(user.password, password):
        return render_template("settings.html",params=params, posts=posts)
        #else:
        #    flash('Incorrect password, try again.')
    else:
        flash('Email does not exist.')

    return render_template("login.html")
    
            

       


   
#    if "user" in session and session['user'] == params['admin_user']:
#        posts = cards.query.filter_by().all()
#
#        return render_template("dashboard.html", params=params, posts=posts)
#
#    if request.method=="POST":
#        username = request.form.get("uname")
#        userpass = request.form.get("upass")
#        if username==params['admin_user'] and userpass==params['admin_password']:
#            session['user']=username
#            posts = cards.query.filter_by().all()
#
#            return render_template("dashboard.html",params=params, posts=posts)
#    else:
       
    
    
    

@app.route("/settings",methods = ['GET', 'POST'])
def settings():
    if(request.method =='POST'):
        '''Add entry to the database'''
        typee = request.form.get('type')
        contacts = request.form.get('phone')
        adresso = request.form.get('adrs')
        entry = cards(type = typee , contact = contacts , adress = adresso)
        db.session.add(entry)
        db.session.commit()
        flash('Email does not exist.')

    

    return render_template('settings.html')

@app.route("/cart")
def cart():
    return render_template('cart.html')




@app.route("/edit" , methods=['GET', 'POST'])
def edit():
    if(request.method =='POST'):
    
        tline = request.form.get('con')
        adrs = request.form.get('adr')
        pos = cards.query.filter_by().first()
        pos.tline = tline
        pos.adrs = adrs
    
        db.session.commit()
    return render_template('edit.html')


@app.route("/signup",methods = ['GET', 'POST'])
def signup():
    if (request.method == 'POST') :
        usern = request.form.get('email')
        passe = request.form.get('password')
        credit = users(Username = usern , password = passe)
        db.session.add(credit)
        db.session.commit()


    return render_template('signup.html')

@app.route("/productscopy")
def productscopy():
    posts = cards.query.filter_by().all()
    return render_template('productsopy.html', params=params, posts=posts)



@app.route("/dashboard")
def dashboard():
    posts = cards.query.filter_by().all()
    return render_template('dashboard.html',params=params, posts=posts)







if __name__ == '__main__':
    db.init_app(app)
    app.run(debug=True)