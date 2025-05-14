
// pages
import { ApiError } from "./../utils/apiError";
import prisma from "../config/db";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import { ICreateWorkspaceResponse, IWorkspace, ICreateWorkspace, IMyWorkspaces, IUpdateWorkspace } from "../interfaces/workspace.interface";
import { IAuthResponse } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/express";

export async function createWorkspace(
  workspaceData: ICreateWorkspace,
  user: IUser
): Promise<ICreateWorkspaceResponse> {
  const existing = await prisma.workspace.findFirst({
    where: {
      name: workspaceData.name,
      ownerId: user.id,
    },
  });

  if (existing) {
    throw ApiError.badRequest("You already have a workspace with this name");
  }

  const workspace = await prisma.workspace.create({
    data: {
      name: workspaceData.name,
      ownerId: user.id,
      members: {
        create: [
          {
            user: { connect: { id: user.id } },
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



export async function getMyWorkspaces(user:IUser):Promise<IMyWorkspaces[]>{
  const memberships = await prisma.userOnWorkspace.findMany({
    where: {userId:user.id},
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

export async function updateWorkspace(workspaceId: string, workspaceData:IUpdateWorkspace, user:IUser):Promise<IWorkspace>{
  const workspace = await prisma.workspace.findUnique({
    where: {id:workspaceId}
  });
  if(!workspace){
    throw ApiError.notFound("Workspace not found")
  }
  if(workspace.ownerId !== user.id && user.role !== "ADMIN"){
    throw ApiError.forbidden("You are not authorized to update this workspace")
  }
  const updatedWorkspace = await prisma.workspace.update({
    where: {id:workspaceId},
    data: {name:workspaceData.name}
  })
  return updatedWorkspace
}
export async  function deleteWorkspace(workspaceId:string, user:IUser){
    const workspace = await prisma.workspace.findUnique({
    where: {id:workspaceId}
  });
  if(!workspace){
    throw ApiError.notFound("Workspace not found")
  }
  if(workspace.ownerId !== user.id && user.role !== "ADMIN"){
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