import prisma from "@/lib/prisma";

export default async function RestTodosPage() {
   const todos = await prisma.todo.findMany({
      orderBy: { description: "asc" },
   });

   return (
      <div>
         <h1>RestTodos Page</h1>
         {JSON.stringify(todos)}
      </div>
   );
}
