import React from "react";
import  { useState} from "react";
import Balance from "./Balance";
import List from "./List";

function Add() {
  const [itemName, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [addTransaction, setTransaction] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
if(itemName!=="" && amount!==""){
            const elem = document.getElementById("error");
            elem.innerHTML = "";
        setTransaction([{id: Date.now(),itemName:itemName,amount: +amount,},...addTransaction]);
        setText('');
        setAmount('')
    }else{
            const elem = document.getElementById("error");
            elem.innerHTML = "Please fill in the Item Name and Amount ";
        }

      };


      const handleDelete = (id) => {
        const delitem = addTransaction.filter((item) => item.id !== id);
        setTransaction([...delitem]);
      };


  return (
    <div className="add">
    <div className="row ">
  
  <div className="col-7">
  <Balance list={addTransaction} /> 

 <div className="card border-warning mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">  <h3>Add a Transaction</h3></div>
  <div className="card-body">
    <h5 className="card-title"> <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Item Name : </label>
          <input
          name="item_name"
            type="text"
            value={itemName}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter item name"
          />
        </div>
        <div className="form-control">
        <label htmlFor="text">Amount : </label>
          <input
          name="item_ammount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter ammount"
          />
        </div>
        <button className="btn btn-dark mt-2">Add</button>
        <div style={{color:"red"}} id="error"></div>
      </form></h5>
    
  </div>
</div>


   </div>  

<div className="col-4">
  <List list={addTransaction}   handleDelete={handleDelete} />
</div>

    </div> </div>
  );
}

export default Add;


