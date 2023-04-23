import Image from "next/image";
import Link from "next/link";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  return (
    <header className="flex z-50 flex-col xs:flex-row rounded-full justify-between items-center w-full h-20 sm:px-7 px-7 bg-white">
      <Link href="/index" className="flex space-x-2">
        <Image
          alt="header text"
          src="/Sparkitect_Logo_Black.svg"
          className="sm:w-160 sm:h-9 w-19 h-9 "

          width={199}
          height={50}
        />
        
      </Link>
      {email ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border-r text-gray-600 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Dashboard</div>
          </Link>
          <Link
            href="/buy-credits"
            className="border-r text-gray-300 pr-4 flex space-x-2 hover:text-stone-600 transition"
          >
            <div>Buy Credits</div>
            <div className="text-gray-600 bg-gray-300 rounded-full px-2 text-xs flex justify-center items-center font-bold">
              New
            </div>
          </Link>
          {photo ? (
            <Image
              alt="Profile picture"
              src={photo}
              className="w-10 rounded-full"
              width={32}
              height={28}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white" />
          )}
        </div>
      ) : (
        <Link
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full  text-stone-200 px-7 py-3 text-sm shadow-md hover:bg-stone-600 bg-gradient-to-br from-green-400 to-blue-500 font-medium transition-all hover:opacity-90 hover:scale-95 transtion-all duration-900"
          href="/dream"
        >
          <p>Sign Up </p>
        </Link>
      )}
    </header>
  );
}
