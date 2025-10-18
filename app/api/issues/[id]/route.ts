import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const IssueSchema = z.object({
    title : z.string().min(1 , 'title is required').max(255),
    description: z.string().min(1, 'description is required')
})

export async function PATCH
(request:NextRequest , {params} : {params: {id: string}}) {
const body = await request.json();
const validation = IssueSchema.safeParse(body)
if(!validation.success) 
    return NextResponse.json(validation.error.format() , {status: 400})
  
 const issue = await prisma.issue.findUnique({
    where: {id: parseInt(params.id)}
 })
 
 if(!issue) return NextResponse.json({error: 'Invalid issue'} , {status: 404})

   const updatedIssue = await prisma.issue.update({
        where: {id: issue.id},
        data: {
            title: body.title ,
            description: body.description
        }
    })

    return NextResponse.json(updatedIssue)
}