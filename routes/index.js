// import express, { Router, urlencoded } from "express"


// import { renderHome,addTask,toggleController, removeTask } from "../controllers/taskController.js";

// const router=express.Router();
// router.get("/",renderHome)
// router.post("/task",addTask)
// router.post("/toggle/:id",toggleController)
// router.post("/delete/:id",removeTask)




// export default router;


// import taskRoutes from "/.routes/taskRoutes.js";

// const app=express();
// app.use(urlencoded)

import express from "express";
import tasRoutes from "./taskRoutes.js";

const router=express.Router();
router.use("/",tasRoutes);

export default router