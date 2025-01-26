import { useState } from 'react'

const Calculator = () => {
    const [value,setValue]=useState('');

const handleCalc= (clickVal) => {
    console.log(clickVal);
    setValue((prvalue)=>(prvalue+clickVal));
}
function calculate(e)
{
    e.preventDefault();
    try{
    let result=eval(value);
    setValue(result.toString());
    }
    catch{
        setValue('Error');
    }
}

  return (
    <div>
        <h1>calculator</h1>
        <form >
            <input type="text" value={value} readOnly/>
            <button onClick={()=>handleCalc('1')}>1</button>
            <button onClick={()=>handleCalc('2')}>2</button>
            <button onClick={()=>handleCalc('3')}>3</button>
            <button onClick={()=>handleCalc('4')}>4</button>
            <button onClick={()=>handleCalc('5')}>5</button>
            <button onClick={()=>handleCalc('6')}>6</button>
            <button onClick={()=>handleCalc('7')}>7</button>
            <button onClick={()=>handleCalc('8')}>8</button>
            <button onClick={()=>handleCalc('9')}>9</button>
            <button onClick={()=>handleCalc('0')}>0</button>
            <button onClick={()=>handleCalc('+')}>+</button>
            <button onClick={()=>handleCalc('-')}>-</button>
            <button onClick={()=>handleCalc('+')}>x</button>
            <button onClick={()=>handleCalc('+')}>/</button>
            <button onClick={()=>calculate}>=</button>
        </form>
        </div>
  )
}

export default Calculator