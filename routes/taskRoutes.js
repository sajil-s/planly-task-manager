import express from 'express';

import {
    renderHome,addTask,
    removeTask,toggleController,

}from "../controllers/taskController.js";

const router=express.Router();

router.get("/",renderHome);
router.post("/task",addTask);
router.post("/toggle/:id",toggleController);
router.post("/delete/:id",removeTask);


export default router;