import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-blue-900 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Todo List
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}

export default NavBar;
