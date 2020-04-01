/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as TaskService from "./tasks.service";
import { Task } from "./task.interface";
import { Tasks } from "./tasks.interface";
/**
 * Router Definition
 */
export const tasksRouter = express.Router();

/**
 * Controller Definitions
 */
tasksRouter.get("/", async (req: Request, res: Response) => {
    try {
        const tasks: Tasks = await TaskService.findAll();

        res.status(200).send(tasks);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// GET tasks/:id

tasksRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const task: Task = await TaskService.find(id);

        res.status(200).send(task);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


// POST tasks/

tasksRouter.post("/", async (req: Request, res: Response) => {
    try {
        const task: Task = req.body.task;

        await TaskService.create(task);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// PUT tasks/

tasksRouter.put("/", async (req: Request, res: Response) => {
    try {
        const task: Task = req.body.task;

        await TaskService.update(task);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE tasks/:id

tasksRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await TaskService.remove(id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});