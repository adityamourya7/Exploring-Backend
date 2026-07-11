const express = require('express');
const app = express();

let notes = [];

app.use(express.json());

app.get("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes[id - 1];

    if (!note) {
        return res.status(404).send({
            message: "Note Not Found",
        });
    }

    res.status(200).send({
        message: "Note Found Successfully",
        data: note,
    });
});

// 2. POST Route
app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).send({ message: "Success" });
});

app.patch("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = id - 1;

    if (index < 0 || index >= notes.length) {
        return res.status(404).send({ message: "Note not found to update" });
    }
    notes[id - 1].desc = req.body.desc;
    res.status(200).send("Note updated successfully");

})

app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = id - 1;

    if (index < 0 || index >= notes.length) {
        return res.status(404).send({ message: "Note not found to delete" });
    }

    delete notes[id - 1];

    res.status(200).send({
        message: "Note Deleted Successfully",
    });
});

module.exports = app;