// import express from "express";
const express = require("express");
const app = express();

const port = 9000;
// listening the app

app.use("/", (req, res) => {
  res.json({ message: "Hello vercel " });
});

app.listen(9000, () => {
  console.log(`server is running from ${port} port`);
});
