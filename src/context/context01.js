import { createContext, useReducer, useContext } from "react";
import Reducer1 from '../TodoReducer/todoListReducer';
const ReducerContext = createContext([])

export function ReducerProvider({ children }) {
    const [ArryTodo, dispatch] = useReducer(Reducer1, []);

    return <ReducerContext.Provider value={{ ArryTodo, dispatch }}>
        {children}
    </ReducerContext.Provider>

}


export const useReducerContext = () => {
    return useContext(ReducerContext);
}









// export const context01 = createContext([]);
