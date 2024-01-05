"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number): Promise<boolean> => {
   return new Promise((resolve) => {
      setTimeout(() => resolve(true), seconds * 1000);
   });
};

export async function toggleTodo(id: string, complete: boolean): Promise<Todo> {
   // await sleep(3);
   const todo = await prisma.todo.findFirst({
      where: {
         id: id,
      },
   });
   if (!todo) throw new Error("Todo not found by id ");

   const updatedTodo = await prisma.todo.update({
      where: {
         id: id,
      },
      data: {
         complete: complete,
      },
   });
   revalidatePath("/dashboard/server-todos");
   return updatedTodo;
}
export const addTodo = async (description: string) => {
   try {
      const todo = await prisma.todo.create({ data: { description } });
      revalidatePath("/dashboard/server-todos");

      return todo;
   } catch (error) {
      return {
         message: "Error creando todo",
      };
   }
};

export async function deleteCompleted(): Promise<void> {
   const resp = await prisma.todo.deleteMany({
      where: {
         complete: true,
      },
   });

   console.log(resp);

   revalidatePath("/dashboard/server-todos");
   return;
}
