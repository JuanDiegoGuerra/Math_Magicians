import { useState } from 'react';
import NumbersCalc from './numbersCalc';
import CalcOperator from './CalcOperator';
import Screen from './screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const updatedObj = calculate(calcObject, buttonName);
    setCalcObject(updatedObj);
  }

  return (
    <div className="grid-container">
      <Screen render={calcObject.next || calcObject.total || '0'} />
      <CalcOperator operator="AC" handleClick={handleClick} />
      <CalcOperator operator="+/-" handleClick={handleClick} />
      <CalcOperator operator="%" handleClick={handleClick} />
      <CalcOperator operator="÷" handleClick={handleClick} />
      <CalcNumber number={7} handleClick={handleClick} />
      <CalcNumber number={8} handleClick={handleClick} />
      <CalcNumber number={9} handleClick={handleClick} />
      <CalcOperator operator="x" handleClick={handleClick} />
      <CalcNumber number={4} handleClick={handleClick} />
      <CalcNumber number={5} handleClick={handleClick} />
      <CalcNumber number={6} handleClick={handleClick} />
      <CalcOperator operator="-" handleClick={handleClick} />
      <CalcNumber number={1} handleClick={handleClick} />
      <CalcNumber number={2} handleClick={handleClick} />
      <CalcNumber number={3} handleClick={handleClick} />
      <CalcOperator operator="+" handleClick={handleClick} />
      <CalcNumber number={0} handleClick={handleClick} />
      <CalcOperator className="calc-number calc-0" operator="." handleClick={handleClick} />
      <CalcOperator operator="=" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
