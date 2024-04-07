from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('layout.html')

@app.route('/help')
def hello():
    return render_template('hello.html', name="name")