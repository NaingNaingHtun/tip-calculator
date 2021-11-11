import { setTipPercent } from './tipPercentSlice';
import { useDispatch } from 'react-redux';
import './style.css';
export function TipPercent(props) {
    const dispatch = useDispatch();
    const onClickHandler = (event) => {
        dispatch(setTipPercent(event.target.value));
        for (let child of event.target.parentElement.children) {//removing previous chosen tip percent.
            if (child.classList.contains('chosen-percent')) {
                child.classList.remove('chosen-percent');
            }
        }
        event.target.classList.add('chosen-percent');//add class "chosen-percent" to the current selected tip percent
    }
    return (
        <button type="button" value={props.percent} onClick={onClickHandler} className="tip-percent">{props.percent}%</button>
    );
}