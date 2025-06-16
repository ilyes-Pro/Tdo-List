

import TodoList from './components/TodoList'
import './components/style.css'

import { ToastProvider } from './context/SnackbarContext';



// context
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { context01 } from './context/context01';
import { useState } from 'react';
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
  // const data = [
  //   {
  //     id: uuidv4(),
  //     title: 'slam',
  //     details: 'lksdfsdff',
  //     comblet: false,
  //   },
  //   {
  //     id: uuidv4(),
  //     title: 'slam',
  //     details: 'lksdfsdff',
  //     comblet: false,

  //   },

  //   {
  //     id: uuidv4(),
  //     title: 'slam',
  //     details: 'lksdfsdff',
  //     comblet: false,

  //   },

  // ];


  const [ArryTodo, setArryTodo] = useState([]);
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

    <ToastProvider>

      <ThemeProvider theme={theme}>
        <div className='App' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#191b1f",

          direction: "rtl",
        }}  >

          {/* <Snkb.Provider value={{ openSnackbar }}> */}


          <context01.Provider value={{ ArryTodo, setArryTodo }}>
            <TodoList />
          </context01.Provider>



          {/* </Snkb.Provider> */}
          {/* < SimpleSnackbar open={open} message={Message} /> */}

        </div></ThemeProvider>
    </ToastProvider>

  );
}

export default App;















