import { Bill } from '../../features/bill/Bill';
import { NumberOfPeople } from '../../features/numberOfPeople/NumberOfPeople';
import { TipPercent } from '../../features/tipPercent/TipPercent';
import { useDispatch } from 'react-redux';
import './style.css';
import { setTipPercent } from '../../features/tipPercent/tipPercentSlice';
export function Inputs() {
    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        dispatch(setTipPercent(event.target.value));
        const chosenPercent = document.getElementsByClassName('chosen-percent')[0];
        if (chosenPercent) {
            chosenPercent.classList.remove('chosen-percent');
        }

    }
    return (
        <section className="inputs">
            <Bill />
            <label htmlFor="tip-percents">Select Tip %</label>
            <div className="tip-percents" id="tip-percents">
                <TipPercent percent="5" />
                <TipPercent percent="10" />
                <TipPercent percent="15" />
                <TipPercent percent="25" />
                <TipPercent percent="50" />
                <input type="text" className="custom-tip" placeholder="Custom"
                    onChange={onChangeHandler}></input>
            </div>
            <NumberOfPeople />
        </section>
    );
}