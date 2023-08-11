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
      <NumbersCalc number={7} handleClick={handleClick} />
      <NumbersCalc number={8} handleClick={handleClick} />
      <NumbersCalc number={9} handleClick={handleClick} />
      <CalcOperator operator="x" handleClick={handleClick} />
      <NumbersCalc number={4} handleClick={handleClick} />
      <NumbersCalc number={5} handleClick={handleClick} />
      <NumbersCalc number={6} handleClick={handleClick} />
      <CalcOperator operator="-" handleClick={handleClick} />
      <NumbersCalc number={1} handleClick={handleClick} />
      <NumbersCalc number={2} handleClick={handleClick} />
      <NumbersCalc number={3} handleClick={handleClick} />
      <CalcOperator operator="+" handleClick={handleClick} />
      <NumbersCalc number={0} handleClick={handleClick} />
      <CalcOperator className="calc-number calc-0" operator="." handleClick={handleClick} />
      <CalcOperator operator="=" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
