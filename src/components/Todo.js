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
import { useReducerContext } from '../context/context01';


export default function Todo(props) {
    const { openSnackbar } = useSnkb2();
    const { ArryTodo, dispatch } = useReducerContext();

    // const { ArryTodo, setArryTodo } = useContext(context01);


    const handleClickOpen = () => {
        props.deletOpen(props.Arry)
    };



    function handleClickOpenUpdate() {
        props.OpdateOpen(props.Arry)

    }




    // comblet
    function handleClike() {

        dispatch({
            type: "comblet",
            payloud: {
                id: props.Arry.id,
            },
        })

        if (!props.Arry.comblet) {
            openSnackbar("تم إكتمال المهمة")
        }
    }

    return (
        <>


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
