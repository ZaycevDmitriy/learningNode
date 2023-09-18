export interface ITask {
  id: number;
  status: string;
  task: string;
}

export interface IData {
  todo: ITask[];
}
