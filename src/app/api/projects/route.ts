// app/api/projects/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET method to retrieve all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}

// POST method to create a new project
export async function POST(request: Request) {
  const body = await request.json();
  const { name, description, brand, image, category } = body;

  if (!name || !description || !brand || !image || !category) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        brand,
        image,
        category,
      },
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}
