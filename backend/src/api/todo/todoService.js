const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
//* quando eu atualizo algum registro no mongo, eu quero que retorne o registro atualizado
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
