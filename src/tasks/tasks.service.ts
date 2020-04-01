/**
 * Data Model Interfaces
 */
import { Task } from "./task.interface";
import { Tasks } from "./tasks.interface";

/**
 * In-Memory Store
 */
const tasks: Tasks = {
    1: {
        id: 1,
        title: "typescript",
        time: 5,
        description: "Create a crud with typescript",

    },
    2: {
        id: 2,
        title: "create test ",
        time: 3,
        description: "create test with jest"
    }
}

/**
 * Service Methods
 */

export const findAll = async (): Promise<Tasks> => {
    return tasks;
};

export const find = async (id: number): Promise<Task> => {
    const record: Task = tasks[id];

    if (record) {
        return record;
    }
    throw new Error("No record found");
};


export const create = async (newTask: Task): Promise<void> => {
    const id = new Date().valueOf();
    tasks[id] = {
        ...newTask,
        id
    };
};


export const update = async (updatedTask: Task): Promise<void> => {
    if (tasks[updatedTask.id]) {
        tasks[updatedTask.id] = updatedTask;
        return;
    }

    throw new Error("No record found to update");
};


export const remove = async (id: number): Promise<void> => {
    const record: Task = tasks[id];

    if (record) {
        delete tasks[id];
        return;
    }

    throw new Error("No record found to delete");
};