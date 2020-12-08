import { getTasks, createTasks, getOneTask, updateTask, finishedTask, deleteTask } from './controller/TaskController';
import { Router } from 'express';

const route = Router();

route.get('/tasks', getTasks);
route.get('/tasks/:id', getOneTask);
route.put('/tasks/:id', updateTask);
route.post('/tasks', createTasks);
route.patch('/tasks/:id', finishedTask);
route.delete('/tasks/:id', deleteTask);

export default route;