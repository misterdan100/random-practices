export interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  status: Status
  priority: Priority
  tags: Tag["id"][];
  projectId: string
}

export interface Tag {
  id: string;
  name: string;
  todos: Todo["id"][];
}

export interface Project {
  id: string;
  name: string;
  todos: Todo["id"][];
}

export type Status = "notStarted" | "inProgress" | "paused" | "done";
export type Priority = "low" | "medium" | "high";

export interface FormData {
  title: string;
  description?: string;
  dueDate?: string | Date;
  status?: Status
  priority?: Priority
  projectId?: string
}

