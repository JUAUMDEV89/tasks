import { getRepository } from 'typeorm';
import { Tasks } from '../entity/Tasks';
import { Request, Response } from 'express';

     export const getTasks = async(req: Request,  res: Response)=>{
        const tasks = await getRepository(Tasks).find();

        return res.json(tasks)
     }

     export const getOneTask = async(req: Request,  res: Response)=>{
        const task = await getRepository(Tasks).findOne(req.params.id);

        return res.json(task);
     }

     export const createTasks = async(req: Request, res: Response)=>{

        const task = await getRepository(Tasks).save(req.body);

        return res.json(task);
     }
 
     export const updateTask = async(req: Request, res: Response)=>{

         const { id } = req.params;

         const task = await getRepository(Tasks).update(id, req.body);

         if(task.affected === 1){
             const taskUpdated = await getRepository(Tasks).findOne(id);
             return res.json(taskUpdated);
         }

         return res.status(404).json({ message: 'Task Not Found' });

     }

     export const finishedTask = async(req: Request, res: Response)=>{

        const { id } = req.params;

        const task = await getRepository(Tasks).update(id, {
            finished: true
        });

        if(task.affected === 1){
            const taskUpdated = await getRepository(Tasks).findOne(id);
            return res.json({ message: 'Task finished' });
        }

        return res.status(404).json({ message: 'Task Not Found' });

    }

    export const deleteTask = async(req: Request, res: Response)=>{

        const { id } = req.params;

        const task = await getRepository(Tasks).delete(id);

        if(task.affected === 1){
            return res.json({ message: 'Task deleted' });
        }

        return res.status(404).json({ message: 'Task Not Found' });

    }
