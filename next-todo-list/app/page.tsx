import Image from "next/image";
import { useEffect } from "react";
import { AiFillAlert, AiOutlinePlus } from "react-icons/ai";

export default function Home() {

  

  useEffect(() => {

  }, [])


  return (
    <main className="flex min-h-screen flex-row w-full h-full items-start justify-center p-24">
      <div className="container max-w-96 p-2 m-4">
        {/* todo input */}
        <div className="flex items-center justify-between gap-2 mb-4">
        <input type="text" name="" id="" className="rounded-md flex-1 text-black p-2 bg-white" />
          <button className="w-10 h-10 flex items-center justify-center bg-sky-400 rounded-md">
            <AiOutlinePlus />
          </button>
        </div>

        {/* todo list */}
        <div className="">

        </div>


      </div>
    </main>
  );
}
