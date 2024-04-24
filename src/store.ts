import { create } from 'zustand'

interface ITask {
    text: string;
    status: 'progress' | 'done'
}

interface ITasksStore {
    tasks: ITask[];
    setTasks(tasks: ITask[]):void;
    addTask(task: ITask):void;
}
export const useTasks = create<ITasksStore>((set) => ({
    tasks: [],
    setTasks: (tasks: ITask[]) => set((state: ITasksStore) => ({ ...state, tasks })),
    addTask: (task: ITask) => set((state: ITasksStore) => ({ ...state, tasks: [task, ...state.tasks] })),
}))
