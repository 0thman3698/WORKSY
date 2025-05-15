
// pages
import { ApiError } from "./../utils/apiError";
import prisma from "../config/db";
import { ICreateWorkspaceResponse, IWorkspace, ICreateWorkspace, IMyWorkspaces, IUpdateWorkspace } from "../interfaces/workspace.interface";

export async function createWorkspace(
  workspaceData: ICreateWorkspace,
  userId: string
): Promise<ICreateWorkspaceResponse> {
  const existing = await prisma.workspace.findFirst({
    where: {
      name: workspaceData.name,
      ownerId: userId,
    },
  });

  if (existing) {
    throw ApiError.badRequest("You already have a workspace with this name");
  }

  const workspace = await prisma.workspace.create({
    data: {
      name: workspaceData.name,
      ownerId: userId,
      members: {
        create: [
          {
            user: { connect: { id: userId } },
            role: "OWNER",
          },
        ],
      },
    },
  });

  return {
    workspace
  };
}



export async function getMyWorkspaces(userId:string):Promise<IMyWorkspaces[]>{
  const memberships = await prisma.userOnWorkspace.findMany({
    where: {userId:userId},
    include: {
      workspace: {
        include: {
          owner: {select: {id:true, name: true}}
        }

      }
    }
  })
  const workspaces = memberships.map((membership: any) => ({
    id: membership.workspace.id,
    name: membership.workspace.name,
    role: membership.role,
    owner: membership.workspace.owner,
  }));
  return workspaces
  
}

export async function updateWorkspace(workspaceId: string, workspaceData:IUpdateWorkspace, userId:string):Promise<IWorkspace>{
  const workspace = await prisma.workspace.findUnique({
    where: {id:workspaceId}
  });
  if(!workspace){
    throw ApiError.notFound("Workspace not found")
  }
  if(workspace.ownerId !== userId){
    throw ApiError.forbidden("You are not authorized to update this workspace")
  }
  const updatedWorkspace = await prisma.workspace.update({
    where: {id:workspaceId},
    data: {name:workspaceData.name}
  })
  return updatedWorkspace
}
export async  function deleteWorkspace(workspaceId:string, userId:string):Promise<void>{
    const workspace = await prisma.workspace.findUnique({
    where: {id:workspaceId}
  });
  if(!workspace){
    throw ApiError.notFound("Workspace not found")
  }
  if(workspace.ownerId !== userId){
    throw ApiError.forbidden("You are not authorized to delete this workspace")
  }
    await prisma.userOnWorkspace.deleteMany({
    where: { workspaceId }});
    
  await prisma.workspace.delete({
    where: {id:workspaceId}
  })
  return;
}



export const workspaceService ={
    createWorkspace,
    getMyWorkspaces,
    updateWorkspace,
    deleteWorkspace
}