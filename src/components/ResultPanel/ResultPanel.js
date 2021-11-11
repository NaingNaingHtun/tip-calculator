import './style.css';
import { useDispatch } from 'react-redux';
import { setBill } from '../../features/bill/billSlice';
import { setNumberOfPeople } from '../../features/numberOfPeople/numberOfPeopleSlice';
import { setTipPercent } from '../../features/tipPercent/tipPercentSlice';
export function ResultPanel({ tipAmount, total }) {
    const dispatch = useDispatch();
    const onClickHandler = (event) => {
        dispatch(setBill(''));
        dispatch(setNumberOfPeople(''));
        dispatch(setTipPercent(0));
        event.target.disabled = true;//disabled the reset button after reset
        event.target.style.opacity = 0.5;
    }
    return (
        <section className="result-panel">
            <div className="result">
                <div className="result-label"><p>Tip Amount</p>  <p>/ person</p></div>
                <span className="result-amount">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="result">
                <div className="result-label"><p>Total</p>  <p>/ person</p></div>
                <span className="result-amount">${total.toFixed(2)}</span>
            </div>
            <div>
                <button id="reset-btn" onClick={onClickHandler}>RESET</button>
            </div>
        </section>
    );
}