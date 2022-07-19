import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    device: 0
};

export const sesionSlice = createSlice({
    name: 'sesion',
    initialState,
    reducers: {
        asignarDevice: (state, action) => {
            console.log('dsd')
            if (action.payload > 990) {
                state.device = 2
            } else if (action.payload >780) { 
                state.device = 1
            } else {
                state.device = 0
            }
            
        },
       
    },
});

export const {
    asignarDevice
} = sesionSlice.actions

export const selectDevice = (state) => state.sesion.device;

export default sesionSlice.reducer;