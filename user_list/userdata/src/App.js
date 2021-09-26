import React,{useState} from "react";
import './App.css';
import Add_User from "./component/Add_User";
import ReactPaginate from "react-paginate";

function App() {
  const[page,setPage]=useState(1);
  const[pageCount,setPageCount]=useState(2);
  const pageChange=({selected})=>{
    

if((selected+1)>page)
{setPageCount(pageCount+1);}
if((selected+1)<page)
{setPageCount(pageCount-1);}
setPage(selected+1);

console.log(page);

  }
  
  
  return (
    <div >
      <div className="container-fluid justify-content-center align-items-between d-flex bg-dark">
      <Add_User
      page={page}
      
      />
      </div>
      <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      pageCount={pageCount}
      onPageChange={pageChange}
      containerClassName={"paginationcont"}
      previousLinkClassName={"prevbttn"}
      nextLinkClassName={"nextbtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}

      
      
      
      />

    </div>
  );
}

export default App;
