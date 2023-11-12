import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({ id }) {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24}></HiOutlineTrash>
    </button>
  );
}

export default RemoveBtn;
