import { prisma } from '../config/prisma';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const createWorkspace = async (req: Request, res: Response) => {
    const { name } = req.body;

    const userId = req.user?.id


    
        const workspace = await prisma.workspace.create({
            data: {
                name,
                owner: {
                    connect: { id: userId },
                  },
                members: {
                    create: [
                        {
                            user: {connect:{id:userId}},
                            role: "OWNER"
                        }
                    ]
                }
            }
        });

        res.status(201).json({
            message: "Workspace created successfully",
            workspace
        });
  
};

export const getMyWorkspaces = async (req: Request, res: Response)=>{
        const userId = req.user?.id
    
        const memberships = await prisma.userOnWorkspace.findMany({
            where: {userId},
            include: {
                workspace: {
                    include: {
                        owner: {select: {id: true, name: true}}
                    }
                }
            }
        })
        //محتاج اعدل التايب بتاعها 
        const workspaces = memberships.map((membership: any) => ({
            id: membership.workspace.id,
            name: membership.workspace.name,
            role: membership.role,
            owner: membership.workspace.owner,
          }));

        res.status(200).json({ workspaces });
 
}

