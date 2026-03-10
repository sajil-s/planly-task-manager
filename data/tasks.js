import fs from "fs";
import path from "path";
import crypto from "crypto"

const filePath="./data/tasks.json";

function loadTask(){
    const data=fs.readFileSync(filePath,"utf-8");
    return JSON.parse(data);
}

function saveTask(tasks){
    fs.writeFileSync(filePath,JSON.stringify(tasks,null,2));
}




function taskCreate(title,descreption,priority){

    const tasks=loadTask();

    let obj={
     id: crypto.randomUUID(),
        title:title,
        descreption:descreption,
        priority:priority,
       
        compleated:false,
        createdAt: new Date().toISOString().split("T")[0]
    }
    tasks.push(obj)
    saveTask(tasks)
    console.log(tasks)
    return obj
}

function toggleTask(id){

    const tasks=loadTask();
  const task= tasks.find(t=>t.id===id);
 
  if(task){
     task.compleated=!task.compleated;
  }
  saveTask(tasks)

}

function getCompletionPercentage(){
      const tasks=loadTask()
    let total=tasks.length;
    if (total==0) return 0;
    let compleated=tasks.filter(task=>task.compleated).length
    const percentage=(compleated/total) * 100;
    return Math.round(percentage)
}

function getAllTasks(){
    return loadTask();
}
function deleteTask(id){
    let tasks=loadTask();
    tasks=tasks.filter(task=>task.id!== id);
    saveTask(tasks)
    
    }


export {taskCreate,toggleTask,
    getCompletionPercentage,getAllTasks,
    deleteTask
}




