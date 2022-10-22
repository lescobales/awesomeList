export class Task {
    static readonly pomodoroLimit: number = 5; // nombre maximum de pomodoros
    completed: boolean; // tâche terminé ou non
    done: number; // nombre de pomodoros effectués
    title: string; // intitulé de la tâche
    todo: number; // nombre de pomodoros prévus

    constructor(options: {
    done?: number,
    title?: string,
    completed?: boolean,
    todo?: number,
    } ={})
    {
    this.done = options.done || 0;
    this.title = options.title || '';
    this.completed = options.completed || false;
    this.todo = options.todo || 1;

    }

}
