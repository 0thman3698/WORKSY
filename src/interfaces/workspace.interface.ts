
export interface ICreateWorkspace {
  name: string;
}

export interface IWorkspace {
  id: string;
  name: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateWorkspaceResponse {
  workspace: IWorkspace;
}

export interface IMyWorkspaces {
  id: string;
  name: string;
  role: string;
  owner: {
    id: string;
    name: string;
  };
}

export interface IUpdateWorkspace {
  name?: string;
  description?: string;
}
