import React, { useState } from "react";
import Form from "./components/Form/Form";
import Tasks from "./components/tasks/Tasks";




const App = () => {

  const [items, setItems] = useState([]);

  const onAddHandler = (task) => {
    console.log(task);
    console.log(items);
    setItems((prevstate) => {

      return [task, ...prevstate];
    });

  }
  const onDelete = (id) => {
    const afterDelete = items.filter((item) => item.id !==id);
    setItems(afterDelete);

  }
  const onUpdate = (id, newValue) => {
    console.log("onEdit clicked");
    const updateValue={id:id,value:newValue};
    console.log(updateValue);
    setItems(prev => prev.map(item => (item.id === id) ?updateValue: item));
    console.log(items);

  }

  return (

    <div className="m-5">
      <div className="h1 fw-bold"> Enter the todo's</div>
      <Form onAdd={onAddHandler} />
      <Tasks item={items} delete={onDelete} update={onUpdate} />


    </div>


  );

}


export default App;