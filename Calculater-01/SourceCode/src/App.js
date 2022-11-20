import React, { useState,useReducer } from 'react';
import './App.css';

// function reducer(state,action){

//   switch (action.type){

//      case "*":return(state.result);
//      case "/":return(state.result);
//      case "-":return(state.result);
//      case "+":return(state.result);




// }

// }


const App = () => {
 
    const [result, setResult] = useState("");
    console.log(result)
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
  
    }
    const sin = (e) => {
     const   x1 = parseInt(result)
    const x =  Math.sin(x1* (Math.PI/180))
    setResult (x.toString())
    }
    const cos = (e) => {
     const   x1 = parseInt(result)
     const x =  Math.cos(x1*(Math.PI/180))
     setResult (x.toString())
     }
     const tan = (e) => {
      const   x1 = parseInt(result)
      const x =  Math.tan(x1*(Math.PI/180))
      setResult (x.toString())
      }

      const square = (e) => {
        const   x1 = parseInt(result)
        const x =  Math.sqrt(x1)
        setResult (x.toString())
        }

        const ABS = (e) => {
          const   x1 = parseInt(result)
          const x =  Math.abs(x1)
          setResult (x.toString())
          }
    
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }        
    }
    return (
        <div className="containerx">
          <div className="container" >
              <form >
                  <input className='screen' type="text" value={result} readOnly />
              </form>

              <div className="keypad">


                  <div>
                  <button className="highlight" onClick={clear} id="clear">Clear</button>
                  <button className="highlight" onClick={backspace} id="backspace">C</button>
                  <button className="highlight" name="/" onClick={handleClick}>÷</button>
                  <button className="highlight" name="ABS" onClick={ABS}>ABS</button>
                  </div>


                  <div>
                  <button name="7" onClick={handleClick}>7</button>
                  <button name="8" onClick={handleClick}>8</button>
                  <button name="9" onClick={handleClick}>9</button>
                  <button className="highlight" name="*" onClick={handleClick}>x</button>
                  {/* <button className="highlight" name="^" onClick={handleClick}>^</button> */}
                  </div>


                  <div>
                  <button name="4" onClick={handleClick}>4</button>
                  <button name="5" onClick={handleClick}>5</button>
                  <button name="6" onClick={handleClick}>6</button>
                  <button className="highlight" name="-" onClick={handleClick}>-</button>
                  </div>


                  <div>
                  <button name="1" onClick={handleClick}>1</button>
                  <button name="2" onClick={handleClick}>2</button>
                  <button name="3" onClick={handleClick}>3</button>
                  <button className="highlight" name="+" onClick={handleClick}>+</button>
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


                