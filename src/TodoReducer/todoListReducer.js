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



        case "delete":
            const A = result.filter((i) => action.payloud.id !== i.id)
            localStorage.setItem("todos", JSON.stringify(A))
            return (A);




        case "update":

            const k = result.map((i) => {

                if (i.id == action.payloud.id) {
                    return { ...i, title: action.payloud.title, details: action.payloud.details, }
                }
                return i;
            })
            localStorage.setItem("todos", JSON.stringify(k))
            return (k);



        case "get":
            const storagetodos = JSON.parse(localStorage.getItem("todos")) ?? [];
            return (storagetodos);



        case "comblet":
            const l = result.map((i) => {

                if (action.payloud.id === i.id) {
                    // i.comblet = !i.comblet;
                    return { ...i, comblet: !i.comblet, }
                }
                return i;
            });
            localStorage.setItem("todos", JSON.stringify(l))
            return (l);








        default:
            throw Error("Unknown Action" + action.type);

    }

}