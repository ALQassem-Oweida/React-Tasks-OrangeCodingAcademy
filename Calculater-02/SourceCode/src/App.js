import React, { useState,useReducer,useEffect } from 'react';
import './App.css';

// function reducer(state,action){

//   switch (action.type){

//      case "*":setResult2((parseInt(state.num1)*parseInt(state.num2)));
//      case "/":return {result2:(state.num1/state.num2)};
//      case "-":return {result2:(state.num1-state.num2)};
//      case "+":return {result2:(state.num1+state.num2)};




// }

// }


const App = () => {
 
    const [result, setResult] = useState("");
    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');
    const [operation,setTOF]=useState('false');
    const [operationType,setType]=useState('');
    const [operationType2,setType2]=useState('');
    const [result2, setResult2] = useState(0);
    // const [state,setState]=useReducer(reducer,{num1,num2,setResult2})
    const add =(e) => {
        // setState({type:'+'})
        setTOF('true');
        setType(e.target.name);
        console.log(operation,operationType)
        setResult2((parseInt(num1)+parseInt(num2)).toString())
    }

    const sub=(e) => {
        // setState({type:'-'})
        setTOF('true');
        setType(e.target.name);
        console.log(operation,operationType)
        setResult2((parseInt(num1)-parseInt(num2)).toString())
    }
    const mult=(e) => {
        // setState({type:'*'})
        setTOF('true');
        setType(e.target.name);
        console.log(operation,operationType)
        setResult2((parseInt(num1)*parseInt(num2)).toString())
    }
    const devied=(e) => {
        // setState({type:'/'})
        setTOF('true');
        setType(e.target.name);
        console.log(operation,operationType)
        setResult2((parseInt(num1)/parseInt(num2)).toString())
    }


    const handleClick = (e) => {

        if(operation==='false'){
            setNum1(num1.concat(e.target.name))
            console.log(num1);
        }else{
            setNum2(num2.concat(e.target.name))
            console.log(num2);
          
        }
        
        setResult(result.concat(e.target.name));
        // console.log(result)
        
    }



    const sin = (e) => {
     
    setResult2(Math.sin((parseInt(num1)* (Math.PI/180))))
    setType(e.target.name);
    setNum2('')
    }
    const cos = (e) => {
        setResult2(Math.cos((parseInt(num1)* (Math.PI/180))))
        setType(e.target.name);
        setNum2('')
     }
     const tan = (e) => {
        setResult2(Math.tan((parseInt(num1)* (Math.PI/180))))
        setType(e.target.name);
        setNum2('')
      }

      const square = (e) => {
        setResult2(Math.sqrt((parseInt(num1)* (Math.PI/180))))
        setType(e.target.name);
        setNum2('')
        }

        const ABS = (e) => {
    
          setResult2 (Math.abs(parseInt(result2)))
          setType(e.target.name);
          setNum2('')
          }
    
    const clear = () => {
        const elem = document.getElementById("res");
        elem.innerHTML ="";
        setNum1("");
        setNum2("");
        setTOF('false')
        setType('')
    }
    const backspace = () => {
        setResult2(result2.slice(0, -1)); // Or -1
    }
    const calculate = () => {
   
        const elem = document.getElementById("res");
        elem.innerHTML =result2;
       
          
    }
    return (
        <div className="containerx">
          <div className="container" >
            
              <form className='screen1'  >
                <span> {operationType2}</span>
                <span>{num1}</span>
                <span>{operationType}</span>
                <span>{num2}</span>
              </form>
                  {/* <input className='screen1' type="text" value={num1} readOnly />
                  <input className='screen3' type="text" value={operationType} readOnly />
                  <input className='screen2' type="text" value={num2} readOnly /> */}
                  
           

        

              <form>
                  <h5 id="res" style={{color:"white"}}></h5>
                  
              </form>

              <div className="keypad">


                  <div>
                  <button className="highlight" onClick={clear} id="clear">Clear</button>
                  <button className="highlight" onClick={backspace} id="backspace">C</button>
                  <button className="highlight" name="/" onClick={devied} >÷</button>
                  <button className="highlight" name="ABS" onClick={ABS}>ABS</button>
                  </div>


                  <div>
                  <button name="7" onClick={handleClick}>7</button>
                  <button name="8" onClick={handleClick}>8</button>
                  <button name="9" onClick={handleClick}>9</button>
                  <button className="highlight" name="*" onClick={mult}>x</button>
                  {/* <button className="highlight" name="^" onClick={handleClick}>^</button> */}
                  </div>


                  <div>
                  <button name="4" onClick={handleClick}>4</button>
                  <button name="5" onClick={handleClick}>5</button>
                  <button name="6" onClick={handleClick}>6</button>
                  <button className="highlight" name="-" onClick={sub}>-</button>
                  </div>


                  <div>
                  <button name="1" onClick={handleClick}>1</button>
                  <button name="2" onClick={handleClick}>2</button>
                  <button name="3" onClick={handleClick}>3</button>
                  <button className="highlight" name="+" onClick={add}>+</button>
                  </div>


                  <div>
                   <button name="00" onClick={handleClick}>00</button>
                  <button name="0" onClick={handleClick}>0</button>
                  <button name="." onClick={handleClick}>.</button>
                  <button className="highlight" onClick={calculate} id="result">=</button>
                  </div>

                  <div>
                  <button className="highlight" name="Sin" onClick={sin}>sin</button>
                  <button className="highlight" name="Cos" onClick={cos}>cos</button>
                  <button className="highlight" name="Tan" onClick={tan}>tan</button> 
                  <button className="highlight" name="square" onClick={square}><i className="fa-solid fa-square-root-variable"></i></button> 
                    
                  </div>


              </div>
          </div>
       </div>
    );
}

export default App;


                