

import Snackbar from '@mui/material/Snackbar';


export default function SimpleSnackbar({ open, message }) {





    return (
        <div>

            <Snackbar
                open={open}
                message={message}
                ContentProps={{
                    sx: {
                        backgroundColor: '#4caf50', // ✅ أخضر
                        color: '#fff',

                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // ✅ لون النص
                    },
                }}
            />

        </div>
    );
}