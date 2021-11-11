import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'bill',
    initialState: '',
    reducers: {
        setBill: (state, action) => state = action.payload
    }
}
export const selectBill = (state) => state.bill;
const billSlice = createSlice(options);
export const { setBill } = billSlice.actions;
const billSliceReducer = billSlice.reducer;
export default billSliceReducer;