import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'tipPercent',
    initialState: '',
    reducers: {
        setTipPercent: (state, action) => state = action.payload
    }
}
export const selectTipPercent = state => state.tipPercent;
const tipPercentSlice = createSlice(options);
export const { setTipPercent } = tipPercentSlice.actions;
const tipPercentSliceReducer = tipPercentSlice.reducer;
export default tipPercentSliceReducer;