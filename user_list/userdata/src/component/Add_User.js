import React,{useState,useEffect} from 'react';
import ReactPaginate from "react-paginate";
import "./Add_User.css";



function Add_User(props) {
   const [users,setUsers]=useState([]);
   const page=props.page;
   const pageCount=props.pageCount;

   
   useEffect( ()=>{
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data);
        setUsers(data.data);
        console.log(users);
    })

   },[page,pageCount]);
   
   
   
   
    return (
        <div>
           {users.map((user)=>{

             return <div key={user.id} className="card p-5 bg-dark text-white m-3" style={{width:"20rem"}}>
                     
                     <div className="card-img-top" >
                          <img src={user.avatar} alt="avatar.jpg" style={{width:"100%"}}>
                                                   
              
                            </img>
                      </div>
                     
                     
                     
                     
                     <div className="d-flex font-weight-bold justify-content-center">

                     <div className="">{user.first_name}</div>
                      <div className=" ">{user.last_name}</div>

                     </div>


                      <div className="font-weight-bold text-center">{user.email}</div>
                     
                     
             
                 
                  </div>


            })} 
        </div>
    )
}

export default Add_User
