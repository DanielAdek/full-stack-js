import express from 'express';
import todos from '../server/controllers/todoController';

const router = express.Router();

router.post('/todo/create', todos.create);
router.get('/todos', todos.findAll);
router.get('/todo/:todoId', todos.findOne);
router.put('/todo/:todoId', todos.modify);
router.delete('/todo/:todoId', todos.destroy);

export default router;
