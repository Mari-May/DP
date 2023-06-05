import  express  from "express";
import { addComment, deleteComment, getComment, getComments, updateComment } from "../controllers/post.js";

const router = express.Router();

router.get("/post", getComments);
router.get("/:id", getComment);
router.post("/post", addComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

export default router;