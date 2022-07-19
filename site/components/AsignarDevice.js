import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asignarDevice } from "../redux/sliceSesion/sesionSlice";


function AsignarDevice(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
        dispatch(asignarDevice(width))
        window.addEventListener('resize', handleChangeWindowSize)
        return () => {
            window.removeEventListener('resize', handleChangeWindowSize)
        };
    }, [])

    const handleChangeWindowSize = (event) => {
        const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

        dispatch(asignarDevice(width))
    }
  
    return <div></div>
}

export default AsignarDevice;