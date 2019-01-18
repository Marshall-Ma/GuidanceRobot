# -*- coding: utf-8 -*-

from . import web


@web.route('/index', methods=['GET'])
def index():
    return 'hello world'
