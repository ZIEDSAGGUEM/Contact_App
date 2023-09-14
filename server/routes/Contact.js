const express = require("express");
const Contact = require("../models/Contact.js");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const allContacts = await Contact.find({});
    res.status(200).json({ status: "SUCCESS", allContacts });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
});

route.post("/create", async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({ status: "SUCCESS", newContact });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
});

route.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const SingleUser = await Contact.findById(id);
    res.status(200).json({ status: "SUCCESS", SingleUser });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
});

route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const UpdatedUser = await Contact.findByIdAndUpdate(id, req.body);
    res.status(200).json({ status: "SUCCESS", UpdatedUser });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const UserDeleted = await Contact.findByIdAndRemove(id);
    res.status(200).json({ status: "SUCCESS", UserDeleted });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
});

module.exports = route;
