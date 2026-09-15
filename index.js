import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import multer from "multer";
import fs from 'fs'
import Cloth from "./model/cloth.js";

// const express = require('express')
// const dotenv = require('dotenv')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const multer = require('multer')

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const uploadDir = path.join(__dirname, 'public', 'uploads', 'cloth');
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use("/uploads", express.static("uploads"));

// Ensure upload directory exists
const uploadDir = "./upload/clothes"
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("cloth"), async (req, res) => {
  const clothInfo = req.body;
  const clothImg = req.file;
  console.log(req.file);

  const cloth = {
    style: clothInfo.style,
    amount: clothInfo.amount,
  };

  try {
    if (req.file) {
      cloth.clothImg = clothImg.filename;
      cloth.clothImgURL = `/uploads/cloths/${req.file.filename}`;
    }
    console.log(cloth);
    console.log("clothImg " + clothImg);
    const uploadingCloth = await new Cloth(cloth)
    const result = uploadingCloth.save()
    console.log(result)
    res.json({ message: "Successfully uploaded" });
  } catch (error) {
    res.json({ message: "Successfully failed " + error });
  }
});

app.get("/", (req, res) => {
  res.json("Hello world");
});
const port = process.env.PORT;
app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("app running on port " + port);
  } catch (error) {
    console.log(error);
  }
});
