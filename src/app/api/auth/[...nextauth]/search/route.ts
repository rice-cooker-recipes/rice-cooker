import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ message: 'No query provided' }, { status: 400 });
  }

  try {
    const results = await prisma.stuff.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    return NextResponse.json(results);
  } catch (error: unknown) {
    // Check if the error is an instance of the built-in Error class
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Error searching for items', error: error.message }, { status: 500 });
    }
    // If error is not an instance of Error, handle it accordingly
    return NextResponse.json(
      {
        message: 'Unknown error occurred',
        error: 'An unknown error occurred',
      },
      { status: 500 },
    );
  }
}

export default GET;
