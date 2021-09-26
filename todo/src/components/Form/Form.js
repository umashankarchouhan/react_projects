import React, { useState } from "react";
import "./Form.css";


const Form = (props) => {
  const [item, setItem] = useState("");
  const changeHandler = (event) => {



    setItem(event.target.value);


  }

  const submitHandler = (event) => {

    event.preventDefault();
    if (item.trim().length == 0) {
      console.log("length0");
      return;
    }
    const additem = { id: Math.floor(Math.random() * 10000), value: item };
    if (!props.edit) {
      props.onAdd(additem);
    }
    else {
      props.onSubmit(item);

    }


    setItem("");

  }
  return (


    <form onSubmit={submitHandler} className="form-control" >
      {props.edit ? (
        <div className="" >


          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Update Task "
                className=" form-control   mb-3 "
                value={item} onChange={changeHandler} />

            </div>

            <div className="col-md-3 ">

              <button className="submit btn btn-outline-danger w-50 "  >Update </button>
            </div>
          </div>


        </div>
      ) : (


        <div className="form-control" >


          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Enter your Task "
                className=" form-control  mb-3 " value={item} onChange={changeHandler} />
            </div>

            <div className="col-md-3 col-sm-7">

              <button className="submit btn btn-outline-success "  >Add ToDo</button>
            </div>
          </div>








        </div>)}
    </form>

  );

}

export default Form;