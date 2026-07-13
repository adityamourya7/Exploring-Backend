const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
    try {
        const data = req.body;
        await noteModel.create({
            title: data.title,
            desc: data.desc,
        })
        res.status(201).json({
            message: "note created successfully",
        })
    } catch (e) {
        res.status(500).json({
            message: "error while creating note",
        })
    }
})

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes,
    })
})

module.exports = app;