// import express from "express"
// import { getCompletionPercentage,togleTask,taskCreate } from "../data/tasks.js"

// const router2=express.Router()
// router2.get("/",(req,res)=>{

//          const t1 = taskCreate("Wake up", "Morning routine", "LOW");
//     const t2 = taskCreate("Workout", "Gym time", "HIGH");
//     const t3 = taskCreate("Study", "Backend practice", "MEDIUM");
//      const t4 = taskCreate("play", "Backend practice", "MEDIUM");

    
//     togleTask(t2.id);
//     console.log(getCompletionPercentage())

// const percentage=getCompletionPercentage();
// res.send(`compleated:${percentage}%`)


// })

// export default router2

// import express from "express";
// import { renderHome } from "../controllers/taskController.js";

// const router2 = express.Router();

// router2.get("/", renderHome);

// export default router2;