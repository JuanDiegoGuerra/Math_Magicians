import NumbersCalc from './numbersCalc';

const Calculator = () => (
  <div className="grid-container">
    <div className="calc-number calc-screen">0</div>
    <div className="calc-number calc-res">AC</div>
    <div className="calc-number calc-toggle-positive">+/-</div>
    <div className="calc-number calc-percent">%</div>
    <div className="calc-number calc-op calc-div">÷</div>
    <NumbersCalc number={7} />
    <NumbersCalc number={8} />
    <NumbersCalc number={9} />
    <div className="calc-number calc-op calc-multi">x</div>
    <NumbersCalc number={4} />
    <NumbersCalc number={5} />
    <NumbersCalc number={6} />
    <div className="calc-number calc-op calc-rest">-</div>
    <NumbersCalc number={1} />
    <NumbersCalc number={2} />
    <NumbersCalc number={3} />
    <div className="calc-number calc-op calc-sum">+</div>
    <div className="calc-number calc-0">0</div>
    <div className="calc-number calc-coma">.</div>
    <div className="calc-number calc-op calc-iqual">=</div>
  </div>
);

export default Calculator;
