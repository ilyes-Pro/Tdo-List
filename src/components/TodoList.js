

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

import { useState, useContext, useEffect, useMemo } from 'react';


// context
import { context01 } from '../context/context01';
import { useSnkb2 } from '../context/SnackbarContext';


// compontent Dialog
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function TodoList() {
    // context
    const { ArryTodo, setArryTodo } = useContext(context01);
    const { openSnackbar } = useSnkb2();



    const [open, setOpen] = React.useState(false);
    // const [Update, setUpdate] = useState({
    //     title: "",
    //     details: "",
    // })

    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [listId, setlistId] = React.useState(null);

    const [title, setTitle] = useState({
        Title: "",
        details: "",

    });
    const [list, setList] = useState("All");


    // delet
    const handleClickOpen = (Arry) => {
        setlistId(Arry)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function Delete() {
        const A = ArryTodo.filter((i) => listId.id !== i.id)
        setArryTodo(A);
        localStorage.setItem("todos", JSON.stringify(A))
        setOpen(false);
        openSnackbar("تم الحذف")
    }






    // Update
    function handleClickOpenUpdate(Arry) {
        setlistId(Arry)
        // setUpdate({ title: Arry.title, details: Arry.details });
        setOpenUpdate(true)

    }


    function handleCloseUpdate() {
        setOpenUpdate(false)


    }




    function UpdateText() {
        const k = ArryTodo.map((i) => {

            if (i.id == listId.id) {
                return { ...i, title: listId.title, details: listId.details, }
            }
            return i;
        })

        setArryTodo(k);
        openSnackbar();
        localStorage.setItem("todos", JSON.stringify(k))
        setOpenUpdate(false)
        openSnackbar("تم التعديل")

    }






    // List
    function handleList(e) {
        setList(e.target.value);

    }
    const combeltListe = useMemo(() => {
        return ArryTodo.filter((i) => {
            console.log("the first")
            return i.comblet;
        });


    }, [ArryTodo]);

    const non_combeltliste = useMemo(() => {
        return ArryTodo.filter((i) => {
            console.log("the secand")
            return !i.comblet;
        });

    }, [ArryTodo]);

    let listAffich = ArryTodo;
    if (list == "completed") {
        listAffich = combeltListe;

    }
    else if (list == "non-completed") {
        listAffich = non_combeltliste;

    }

    console.log(listAffich)
    let datas = listAffich.map((e) => {

        return <Todo key={e.id} Arry={e} deletOpen={handleClickOpen} OpdateOpen={handleClickOpenUpdate} />


    });






    useEffect(() => {
        const storagetodos = JSON.parse(localStorage.getItem("todos")) ?? [];
        setArryTodo(storagetodos);

    }, []);



    function handlClick() {
        let K = {
            id: uuidv4(),
            title: title.Title,
            details: title.details,
            comblet: false,
        }

        setArryTodo([...ArryTodo, K])

        localStorage.setItem("todos", JSON.stringify([...ArryTodo, K]))
        setTitle({ Title: "", details: "" });
        openSnackbar("تم إنشاء المهة")

    }



    return (
        <>

            <React.Fragment>

                <Dialog
                    style={{ direction: "rtl", }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"هل أنت متأكد من رغبتك في حدف هذه المهمة؟"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            . لا يمكنك التراجع عن الحذف بعد إتمامه
                        </DialogContentText>



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>إغلاق</Button>
                        <Button onClick={Delete} autoFocus>
                            نعم,قم بالحذف
                        </Button>
                    </DialogActions>
                </Dialog>




            </React.Fragment>


            <React.Fragment>

                <Dialog
                    style={{ direction: "rtl", }}
                    open={openUpdate}
                    onClose={handleCloseUpdate}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"هل أنت متأكد من رغبتك في حدف هذه المهمة؟"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="title"
                            label="عنوان"
                            fullWidth
                            variant="standard"
                            value={listId?.title}
                            onChange={(e) => setlistId({ ...listId, title: e.target.value, })}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="details"
                            label="تفاصيل"
                            fullWidth
                            variant="standard"
                            value={listId?.details}
                            onChange={(e) => setlistId({ ...listId, details: e.target.value, })}
                        />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseUpdate}>إغلاق</Button>
                        <Button onClick={UpdateText} autoFocus disabled={!listId?.title?.trim() || !listId?.details?.trim()}>

                            تعديل
                        </Button>
                    </DialogActions>
                </Dialog>




            </React.Fragment>


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
                                <TextField id="outlined-basic" label="عنوان المهمة" variant="outlined" className='Inpute' value={title.Title}
                                    onChange={(evet) => setTitle({ ...title, Title: evet.target.value })} />
                            </Grid>

                            <Grid size={{ xs: 4 }} >
                                <Button variant="contained" className='Inpute' color='primary' disabled={!title.Title.trim() || !title.details.trim()} onClick={() => handlClick()}>إضافة</Button>
                            </Grid>
                            <TextField id="outlined-basic" label="التفاصيل" variant="outlined" className='Inpute' value={title.details}
                                onChange={(evet) => setTitle({ ...title, details: evet.target.value })} />
                        </Grid>




                    </CardContent>

                </Card>
            </Container>


        </>
    );
}
