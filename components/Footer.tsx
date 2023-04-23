import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-30 text-center bg-white rounded-full h-16 sm:h-20 w-full sm:pt-2 pt-4  -mt-10 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 ">
      <div className="sm:pb-2 sm:pl-12 text-gray-400" >
        Powered by{" "}
        
        <a
        
          target="_blank"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2 sm:pb-10 mb-5"
        >
          PopUpAI
        </a>
      </div>
     
       
      
    </footer>
  );
}
