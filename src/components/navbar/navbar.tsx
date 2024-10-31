import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-30">
      <div className="p-1 flex flex-row justify-between select-none items-center transition-all text-slate-300 bg-white">
        <div>
          <Link
            href="https://niravchavda99.github.io"
            className="cursor-pointer p-2 text-xl w-10 h-10 rounded-lg ml-2 bg-white items-center justify-center flex font-bold shadow-md transition-all"
          >
            <p className="blue-gradient_text">NC</p>
          </Link>
        </div>
        <div className="flex flex-row items-center hidden">
          <Link
            href="/"
            className="text-slate-800 hover:rounded-lg hover:bg-slate-200 mx-1 p-2 cursor-pointer border-2 border-transparent text-lg"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
