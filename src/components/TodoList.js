

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

//Components 
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

import { useState, useContext, useEffect } from 'react';


// context
import { context01 } from '../context/context01';


// const data = [
//     {
//         id: uuidv4(),
//         title: 'slam',
//         details: 'lksdfsdff',
//         comblet: false,
//     },
//     {
//         id: uuidv4(),
//         title: 'slam',
//         details: 'lksdfsdff',
//         comblet: false,

//     },

//     {
//      id: uuidv4(),
//         title: 'slam',
//         details: 'lksdfsdff',
//         comblet: false,

//     },

// ];

export default function TodoList() {
    const { ArryTodo, setArryTodo } = useContext(context01);
    // const [ArryTodo, setArryTodo] = useState(data);
    const [title, setTitle] = useState("");
    const [list, setList] = useState("All");

    function handleList(e) {
        setList(e.target.value);

    }

    const combeltListe = ArryTodo.filter((i) => i.comblet)
    const non_combeltliste = ArryTodo.filter((i) => !i.comblet)

    let listAffich = ArryTodo;
    if (list == "completed") {
        listAffich = combeltListe;

    }
    else if (list == "non-completed") {
        listAffich = non_combeltliste;

    }


    let datas = listAffich.map((e) => {

        return <Todo key={e.id} Arry={e} />
        // return <Todo key={e.id}   title={e.title} det={e.details} combelt={e.comblet}/>

    });






    useEffect(() => {
        const storagetodos = JSON.parse(localStorage.getItem("todos")) ?? [];
        setArryTodo(storagetodos);

    }, []);










    // function handleC(id) {
    //     const A = ArryTodo.map((i) => {

    //         if (id === i.id) {
    //             i.comblet = !i.comblet;
    //         }
    //         return i;
    //     });

    //     setArryTodo(A);


    //     // طريقة اخرى
    //     // const A = ArryTodo.map((i) => {

    //     //     if (id === i.id) {
    //     //         return { ...i, comblet: !i.comblet };
    //     //     }
    //     //     return i;
    //     // });

    //     // setArryTodo(A);



    // 




    function handlClick() {
        let K = {
            id: uuidv4(),
            title: title,
            details: "",
            comblet: false,
        }

        setArryTodo([...ArryTodo, K])

        localStorage.setItem("todos", JSON.stringify([...ArryTodo, K]))
        setTitle("");
    }



    return (
        <>

            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275, maxHeight: '90vh', overflowY: 'auto' }}>
                    <CardContent >
                        <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 'bold', }} mb={4} gutterBottom>
                            مهامي
                        </Typography>
                        <Divider />

                        {/* list button */}
                        <ToggleButtonGroup
                            sx={{ display: 'flex', justifyContent: 'center', direction: 'ltr', mt: 1 }}

                            value={list}
                            exclusive
                            onChange={handleList}
                            aria-label="text alignment"
                            color='primary'
                        >
                            <ToggleButton value="non-completed" name="list3" aria-label="right aligned" >
                                غير المنجز
                            </ToggleButton>

                            <ToggleButton value="completed" name="list2" aria-label="centered">
                                المنجز
                            </ToggleButton>
                            <ToggleButton value="All" name="list1" aria-label="left aligned">
                                كل
                            </ToggleButton>

                        </ToggleButtonGroup>

                        {/* list button */}

                        {/* all todo */}
                        {datas}





                        {/* all todo */}


                        {/*  sharche*/}

                        <Grid container spacing={2} mt={5}>
                            <Grid size={{ xs: 8 }}  >
                                <TextField id="outlined-basic" label="عنوان المهمة" variant="outlined" className='Inpute' value={title}
                                    onChange={(evet) => setTitle(evet.target.value)} />
                            </Grid>

                            <Grid size={{ xs: 4 }} >
                                <Button variant="contained" className='Inpute' color='primary' disabled={title == 0} onClick={() => handlClick()}>إضافة</Button>
                            </Grid>

                        </Grid>




                    </CardContent>

                </Card>
            </Container>


        </>
    );
}
