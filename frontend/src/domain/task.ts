//Create a new type
export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
    id: string;
    teamId: string;

    title: string;
    descripton: string | null;

    createdAt: string;
    updateAt: string;
}
