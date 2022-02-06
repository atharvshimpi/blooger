import mongoose from "mongoose"
const Schema = mongoose.Schema;
// Create Schema
const blogSchema = new Schema({
  creator: { 
    type: String 
  },
  genre: { 
    type: String
  },
  name: { 
    type: String 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  selectedFile: { 
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
}, {
  timestamps: true,
});

const BlogMessage = mongoose.model('BlogMessage', blogSchema);

export default BlogMessage;