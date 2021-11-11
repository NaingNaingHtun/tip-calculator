import './App.css';
import React from 'react';
import { selectBill } from '../features/bill/billSlice';
import { selectNumberOfPeople } from '../features/numberOfPeople/numberOfPeopleSlice';
import { selectTipPercent } from '../features/tipPercent/tipPercentSlice';
import { useSelector } from 'react-redux';
import { ResultPanel } from '../components/ResultPanel/ResultPanel';
import { Inputs } from '../components/Inputs/Inputs';
import { LogoIcon } from '../svg/LogoIcon';
function App() {
  const bill = Number(useSelector(selectBill));
  const percent = Number(useSelector(selectTipPercent)) / 100;
  const people = Number(useSelector(selectNumberOfPeople));

  return (
    <main>
      <div className="logo-container"><LogoIcon className="logo-icon" /></div>
      <div id="tip-calculator-container">
        <Inputs />
        <ResultPanel tipAmount={people === 0 || people === '' ? 0 : (bill * percent) / people}
          total={people === 0 || people === '' ? 0 : ((bill * percent) / people) + (bill / people)} />
      </div>
    </main>
  );
}

export default App;

