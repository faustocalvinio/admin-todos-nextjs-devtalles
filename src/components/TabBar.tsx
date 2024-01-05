"use client";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
// https://tailwindcomponents.com/component/radio-buttons-1
// const tabOptions = [1, 2, 3, 4, 5];

interface Props {
   currentTab?: number;
   tabOptions?: number[];
}

export const TabBar = ({
   currentTab = 1,
   tabOptions = [1, 2, 3, 4],
}: Props) => {
   const [selected, setSelected] = useState(currentTab);
   const router = useRouter();
   function onTabSelected(tab: number) {
      setSelected(tab);
      setCookie("selectedTab", tab.toString());
      router.refresh();
   }

   return (
      <div
         className={`grid w-full ${"grid-cols-4"} space-x-2 rounded-xl bg-gray-200 p-2`}
      >
         {tabOptions.map((tab) => (
            <div key={tab}>
               <input
                  type="radio"
                  id={tab.toString()}
                  className="peer hidden"
                  checked={selected === tab}
                  onChange={() => {}}
               />
               <label
                  onClick={() => onTabSelected(tab)}
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
               >
                  {tab}
               </label>
            </div>
         ))}

         {/* <div>
            <input type="radio" id="2" className="peer hidden" />
            <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
               2
            </label>
         </div>

         <div>
            <input type="radio" id="3" className="peer hidden" />
            <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
               3
            </label>
         </div>

         <div>
            <input type="radio" id="4" className="peer hidden" />
            <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
               4
            </label>
         </div> */}
      </div>
   );
};
