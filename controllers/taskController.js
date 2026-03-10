import { getAllTasks,getCompletionPercentage,taskCreate,toggleTask,deleteTask } from "../data/tasks.js";

function renderHome(req,res){
    const data=getAllTasks();
    const percentage=getCompletionPercentage();

    res.render("layouts/main",{
        page:"home",
        tasks:data,
        percentage:percentage
    })
}


function addTask(req,res){
    const {title,description,priority}=req.body;
    taskCreate(title,description,priority);
    res.redirect("/")

}

function toggleController(req,res){
    const {id}=req.params;
    toggleTask(id);
    res.redirect("/")
}

function removeTask(req,res){
    const {id}=req.params;
    deleteTask(id);
    res.redirect("/")
}

export {renderHome,addTask,toggleController,removeTask};