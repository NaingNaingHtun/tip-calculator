import { configureStore } from '@reduxjs/toolkit';
import billSliceReducer from '../features/bill/billSlice';
import tipPercentSliceReducer from '../features/tipPercent/tipPercentSlice';
import numberOfPeopleSliceReducer from '../features/numberOfPeople/numberOfPeopleSlice';

export const store = configureStore({
    reducer: {
        bill: billSliceReducer,
        tipPercent: tipPercentSliceReducer,
        numberOfPeople: numberOfPeopleSliceReducer
    }
});
