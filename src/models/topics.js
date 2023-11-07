import mongoose from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timeStamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
