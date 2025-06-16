
import { createContext, useState, useContext } from "react";

import SimpleSnackbar from '../components/Snackbar';



const Snkb = createContext({});



export function ToastProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [Message, setMessage] = useState("");

    function openSnackbar(message) {
        setMessage(message)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
    }


    return <Snkb.Provider value={{ openSnackbar }}>

        < SimpleSnackbar open={open} message={Message} />
        {children}

    </Snkb.Provider>


}

export const useSnkb2 = () => {

    return useContext(Snkb);
}

