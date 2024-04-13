from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('room.html')

@app.route('/help')
def help():
    return render_template('hello.html', name="name")