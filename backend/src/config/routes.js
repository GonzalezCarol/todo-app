const express = require('express');

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);
    
    const todoService = require('../api/todo/todoService')
    //* usa todos os métodos [get, post, put, delete]
    todoService.register(router, '/todos')
};
