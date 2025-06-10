

import TodoList from './components/TodoList'
import './components/style.css'



// context
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { context01 } from './context/context01';
import { useState } from 'react';
import { blue } from '@mui/material/colors';

import CssBaseline from '@mui/material/CssBaseline';

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


  return (
    <ThemeProvider theme={theme}>
      <div className='App' style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#191b1f",

        direction: "rtl",
      }}  >


        <context01.Provider value={{ ArryTodo, setArryTodo }}>
          <TodoList />
        </context01.Provider>
      </div></ThemeProvider>
  );
}

export default App;















