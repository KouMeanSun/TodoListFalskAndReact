from flask import Flask
import config
from flask_mongoengine import MongoEngine


app = Flask(__name__)
app.config.from_object('config')

db = MongoEngine(app)

from  app import views,models