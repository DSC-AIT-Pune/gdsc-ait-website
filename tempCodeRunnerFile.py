
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