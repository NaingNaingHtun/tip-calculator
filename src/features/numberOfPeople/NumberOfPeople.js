import { useDispatch, useSelector } from 'react-redux';
import { UserIcon } from '../../svg/UserIcon';
import { setNumberOfPeople, selectNumberOfPeople } from './numberOfPeopleSlice';
import './style.css';
export function NumberOfPeople() {
    const dispatch = useDispatch();
    const numberOfPeople = useSelector(selectNumberOfPeople);
    const onChangeHandler = (event) => {
        dispatch(setNumberOfPeople(event.target.value));
        // if (numberOfPeople === '0') {
        //     event.target.style.borderColor = 'red';
        // } else {
        //     event.target.style.borderColor = 'hsl(172, 67%, 45%)';
        // }
    }
    return (
        <div className="people-container">
            <label htmlFor="people-input">Number of People {numberOfPeople === '0' ? <span className="error">Cann't be zero</span> : ''}</label>
            <div className="input-field">
                <input type="text" value={numberOfPeople}
                    placeholder="0" onChange={onChangeHandler} className={numberOfPeople === '0' ? 'hasError' : ''} />
                <UserIcon className="icon" />
            </div>
        </div>
    );
}