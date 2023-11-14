import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EditTopic({ params }) {
  const { id } = params;
  const { Topic } = await getTopicById(id);
  const { title, description } = Topic;
  // console.log("id:");
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}

export default EditTopic;
