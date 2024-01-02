import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
   await prisma.todo.deleteMany(); // delete * from todo
  //  await prisma.employee.deleteMany();

   // id        String   @id @default("uuid()") @db.VarChar
   // name      String   @db.VarChar
   // lastName      String   @db.VarChar
   // isAdmin   Boolean  @default(true)
   // createdAt DateTime @default(now()) @db.Timestamp(6)
   // roles String[] @default([])

  //  await prisma.employee.createMany({
  //     data: [
  //       { name: "Pepe", lastName: "Perez" },
  //       { name: "Alberto", lastName: "Gomez" },
  //       { name: "Luis", lastName: "Diaz" },
      
  //     ],
  //  });

   await prisma.todo.createMany({
      data: [
         { description: "Piedra del alma", complete: true },
         { description: "Piedra del poder" },
         { description: "Piedra del tiempo" },
         { description: "Piedra del espacio" },
         { description: "Piedra del realidad" },
      ],
   });

   return NextResponse.json({ message: "Seed Executed" });
}
