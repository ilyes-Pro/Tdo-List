import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import { useSnkb2 } from '../context/SnackbarContext';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
//icons
import CheckIcon from '@mui/icons-material/Check';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import './style.css'


// context
import { context01 } from '../context/context01';



import { useContext, useState } from 'react';




// // compontent Dialog
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


export default function Todo(props) {
    const { openSnackbar } = useSnkb2();
    const { ArryTodo, setArryTodo } = useContext(context01);
    // const [open, setOpen] = React.useState(false);
    // const [openUpdate, setOpenUpdate] = React.useState(false);
    // const [Update, setUpdate] = useState({
    //     title: props.Arry.title,
    //     details: props.Arry.details,
    // })

    // Delete
    const handleClickOpen = () => {
        props.deletOpen(props.Arry)
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // function Delete() {
    //     const A = ArryTodo.filter((i) => props.Arry.id !== i.id)
    //     setArryTodo(A);
    //     localStorage.setItem("todos", JSON.stringify(A))
    // }


    // Update


    function handleClickOpenUpdate() {
        props.OpdateOpen(props.Arry)

    }

    // function handleCloseUpdate() {
    //     setOpenUpdate(false)


    // }

    // function UpdateText() {
    //     const k = ArryTodo.map((i) => {

    //         if (i.id == props.Arry.id) {
    //             return { ...i, title: Update.title, details: Update.details, }
    //         }
    //         return i;
    //     })

    //     setArryTodo(k);
    //     localStorage.setItem("todos", JSON.stringify(k))
    //     setOpenUpdate(false);

    // }


    // comblet
    function handleClike() {

        const A = ArryTodo.map((i) => {

            if (props.Arry.id === i.id) {
                i.comblet = !i.comblet;
            }
            return i;
        });

        setArryTodo(A);
        localStorage.setItem("todos", JSON.stringify(A))
        console.log(props.comblet)
        if (props.Arry.comblet) {
            openSnackbar("تم إكتمال المهمة")
        }
    }

    return (
        <>



            {/* <React.Fragment>

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




            </React.Fragment> */}


            {/* <React.Fragment>

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
                            value={Update.title}
                            onChange={(e) => setUpdate({ ...Update, title: e.target.value, })}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="details"
                            label="تفاصيل"
                            fullWidth
                            variant="standard"
                            value={Update.details}
                            onChange={(e) => setUpdate({ ...Update, details: e.target.value, })}
                        />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseUpdate}>إغلاق</Button>
                        <Button onClick={UpdateText} autoFocus disabled={!Update.title.trim() || !Update.details.trim()}>
                            تعديل
                        </Button>
                    </DialogActions>
                </Dialog>




            </React.Fragment> */}


            <Card className='CardAnimtion' sx={{ minWidth: 275, background: '#283593', mt: 2, }} >
                <CardContent >



                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6, md: 8 }} >
                            <Typography variant="h5" sx={{ textAlign: 'start', color: 'white', textDecoration: (props.Arry.comblet) && 'line-through', }} mb={0} gutterBottom>{props.Arry.title}</Typography>
                            <Typography variant="h6" sx={{ textAlign: 'start', color: 'white', textDecoration: (props.Arry.comblet) && 'line-through', }} mb={0} gutterBottom>{props.Arry.details}</Typography>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }} display="flex" justifyContent="space-between" alignItems="center" >


                            <IconButton className='IconButton1 efect' sx={{
                                backgroundColor: (props.Arry.comblet) ? '#8bc34a' : 'white',
                                color: (props.Arry.comblet) ? 'white' : '#8bc34a',
                                border: 'solid #8bc34a 3px !important',
                            }} >
                                <CheckIcon onClick={() => handleClike()}

                                    sx={{
                                        color: (props.Arry.comblet) ? 'white' : '#8bc34a',
                                    }} />
                                {/* className={`check-icon ${props.Arry.comblet ? 'completed' : 'not-completed'}`} */}
                            </IconButton>



                            <IconButton className='IconButton2 efect'>
                                <EditOutlinedIcon onClick={handleClickOpenUpdate} />
                            </IconButton>



                            <IconButton className='IconButton3 efect' >
                                <DeleteOutlineOutlinedIcon onClick={handleClickOpen} />
                            </IconButton>
                        </Grid>

                    </Grid>




                </CardContent>
            </Card>

        </>
    )
}
