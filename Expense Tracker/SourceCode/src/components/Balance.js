import React from 'react'

function Balance(props) {


 

    const amounts = props.list.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0)
      .reduce((sum, item) => (sum += item), 0);
  
    const expense = 
      amounts.filter(item => item < 0).reduce((sum, item) => (sum += item), 0) 
   

const Balance=income+expense

console.log(amounts);


  return (
    <div>

<div className="card text-bg-dark mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-body">
    {Balance<0?<h6 className="card-title" style={{color:"red"}}>Your Balance : ( {Balance} )</h6>:<h6 className="card-title" style={{color:"green"}}>Your Balance : ( {Balance} )</h6>}
  </div>
</div>

<div className="card text-bg-success  mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-body">
    <h6 className="card-title">Your Income : ( + {income} )</h6>
  </div>
</div>

<div className="card text-bg-danger mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-body">
    <h6  className="card-text">Your Expense : ( {expense} )</h6 >
  </div>
</div>


    </div>
  )
}

export default Balance