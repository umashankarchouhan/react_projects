import React,{useState} from "react";
import "./Tasks.css";
import Form from "../Form/Form"


const Tasks=(props)=>{
   let tasks=props.item;
   const [edit,setEdit]=useState({
   id:null,
   value:"",

   });

const onEditSubmit=(value)=>{
if(value.trim().length===0)
return;
console.log("inside task onEditSubmit");
console.log(value);

props.update(edit.id,value);

setEdit({id:null,
value:"",

});
}

if(edit.id){
  return <Form  edit={edit} onSubmit={onEditSubmit}  />

}

return (
<div>
   
        {tasks.map((task)=>  {
        
        
        return <div className="d-flex m-2 task_container " key={task.id}> 
        
        <div className=" task">{task.value}</div>
        <div onClick={()=>setEdit({id:task.id,value:""})}  className="edit"> <i className="fas fa-edit"></i> </div>
        <div onClick={()=>{props.delete(task.id)}} className="delete"> <i className="fas fa-times"></i> </div>
 

        
        
        </div>
    
    
    
        })}
      
    
</div>

);


}

export default Tasks;