import { v4 as uuidv4 } from 'uuid';
export default function Reducer1(result, action) {

    switch (action.type) {
        case "added":
            let K = {
                id: uuidv4(),
                title: action.payloud.title,
                details: action.payloud.details,
                comblet: false,
            }

            localStorage.setItem("todos", JSON.stringify([...result, K]))

            //  setArryTodo([...ArryTodo, K])
            return [...result, K];

            break;














        default:
            throw Error("Unknown Action" + action.type);

    }

}