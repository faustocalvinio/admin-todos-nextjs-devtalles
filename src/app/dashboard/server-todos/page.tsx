export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
   title: "Server Actions Todos test",
};

export default async function RestTodosPage() {
   const todos = await prisma.todo.findMany({
      orderBy: { description: "asc" },
   });

   return (
      <>
         <span className="text-3xl mb-10 text-black">Server Actions Todos</span>
         <div>
            <div className="w-full px-3 mx-5 mt-5 mb-5">
               <NewTodo />
            </div>
            <TodosGrid todos={todos} />
         </div>
      </>
   );
}
