import Image from "next/image";
import TopicList from "../components/TopicList";

export default function Home() {
  return (
    <div className="flex justify-center">
      <TopicList />
    </div>
  );
}
