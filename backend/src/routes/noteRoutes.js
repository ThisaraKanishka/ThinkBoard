import express from "express"
import { getAllNotes, CreateNote, UpdateNote, DeleteNote} from "../controllers/noteController.js"

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", CreateNote);

router.put("/:id", UpdateNote); 

router.delete("/:id", DeleteNote);

export default router; 