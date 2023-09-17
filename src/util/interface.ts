export interface ITask {
  id: number;
  status: string;
  task: string;
}

export interface IData {
  todo: ITask[];
}

export type IAppCommands =
  | 'add'
  | 'get'
  | 'update'
  | 'status'
  | 'delete'
  | 'list'
  | 'help';
