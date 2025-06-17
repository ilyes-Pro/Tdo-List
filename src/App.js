

import TodoList from './components/TodoList'
import './components/style.css'

import { ToastProvider } from './context/SnackbarContext';
import { ReducerProvider } from './context/context01';


// context
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { blue } from '@mui/material/colors';


const theme = createTheme({
  typography: {
    fontFamily: 'Alex',
  },
  palette: {
    primary: blue,

  },
});

function App() {

  // const [ArryTodo, setArryTodo] = useState([]);


  // const [open, setOpen] = useState(false);
  // const [Message, setMessage] = useState("");

  // function openSnackbar(message) {
  //   setMessage(message)
  //   setOpen(true)
  //   setTimeout(() => {
  //     setOpen(false)
  //   }, 2000)
  // }

  return (

    <ThemeProvider theme={theme}>

      <ToastProvider>

        <ReducerProvider>
          <div className='App' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#191b1f",

            direction: "rtl",
          }}  >

            {/* <Snkb.Provider value={{ openSnackbar }}> */}



            <TodoList />




            {/* </Snkb.Provider> */}
            {/* < SimpleSnackbar open={open} message={Message} /> */}

          </div>
        </ReducerProvider>
      </ToastProvider>


    </ThemeProvider>
  );
}

export default App;















