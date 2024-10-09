// app/api/projects/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET method to retrieve a single project by id
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching project' }, { status: 500 });
  }
}

// DELETE method to delete a project by id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const deletedProject = await prisma.project.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 });
  }
}
