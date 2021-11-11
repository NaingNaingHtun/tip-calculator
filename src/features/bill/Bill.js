import { useDispatch, useSelector } from 'react-redux';
import { DollarIcon } from '../../svg/DollarIcon';
import { selectBill, setBill } from './billSlice';

export function Bill(props) {
    const dispatch = useDispatch();
    const bill = useSelector(selectBill);
    function onChangeHandler(event) {
        dispatch(setBill(event.target.value));
        const resetBtn = document.getElementById("reset-btn")
        resetBtn.disabled = false;
        resetBtn.style.opacity = 1;
    }
    return (
        <div className="bill-container">
            <label htmlFor="bill-input">Bill</label>
            <div className="input-field">
                <input type="text" name="bill-input"
                    id="bill-input" placeholder="0"
                    value={bill} onChange={onChangeHandler} />
                <DollarIcon className="icon" />
            </div>

        </div>
    );
}