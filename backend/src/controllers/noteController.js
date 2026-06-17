export function getAllNotes(req, res) {
    res.status(200).send("Note get successfully!");
};

export function CreateNote(req, res) {
    res.status(200).json({massage:"Note Created successfully!"});
};

export function UpdateNote(req, res) {
    res.status(200).json({massage:"Note Updated successfully!"});
};

export function DeleteNote(req, res){
    res.status(200).json({massage:"Note Deleted successfully!"});
};   