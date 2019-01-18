# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS


def register_extension(_app):
    pass


def register_error_handler(_app):
    @_app.errorhandler(404)
    def not_found(error):
        return jsonify('Not Found'), 404

    @_app.errorhandler(500)
    def server_error(error):
        return jsonify('Server Error'), 500


def register_blueprints(_app):
    from app.web import web
    _app.register_blueprint(web)


def create_app():
    app = Flask(__name__)
    CORS(app)
    register_blueprints(_app=app)
    return app
