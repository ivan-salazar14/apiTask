// src/tasks/tasks.interface.ts
import { Task } from "./task.interface";
export interface Tasks {
    [key: number]: Task;
}