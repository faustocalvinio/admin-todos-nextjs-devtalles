interface Props {
   title: string;
   children: React.ReactNode;
}

export const WidgetItem = ({ children, title }: Props) => {
   return (
      <div className="md:col-span-2 lg:col-span-1 w-4/12">
         <div className="flex flex-col h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white items-center justify-center">
            <div>
               <h5 className="text-xl text-gray-600 text-center">{title}</h5>
               <div className="mt-2 flex justify-center gap-4 items-center flex-col">{children}</div>
               
            </div>
         </div>
      </div>
   );
};
