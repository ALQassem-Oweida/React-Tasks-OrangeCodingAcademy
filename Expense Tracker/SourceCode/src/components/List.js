import React from 'react'



    const List = ({handleDelete,list}) => {
     

  
  return (
    <div className='listcont'>






<table className='table table-striped'>
<thead>
    <tr>
<th>Item</th>
<th>Amount</th>
<th></th>
</tr>
</thead>
  

<tbody>
{list.map((item)=>{
return (<tr>
<td>{item.itemName}</td>
<td>{item.amount} $ </td>
<td><button onClick={() => handleDelete(item.id)} className="mybutton"><i className="bi bi-trash"></i></button></td>
</tr> )
})}


</tbody>
</table>


  
  


  </div>







  )
}

export default List