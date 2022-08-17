import { TextField, Stack, Button, Alert, Snackbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

function ContactForm() {

    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alert, setAlert] = React.useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };
    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };
    const sendEmail = (event) => {
        console.log("Should Send Email Here");
        setEmail('');
        setSubject('');
        setMessage('');
        setOpenAlert(true);
        setAlert("success")
    };

    const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    
    setAlert('');
    setOpenAlert(false);
    };


    return (
    <div className="p-12">
        <Stack
            direction="column"
            spacing={2}
            justifyContent="left"
            className="p-8"
        >
            
            <TextField
                required
                id="outlined-required"
                label="Your Email"
                value={email}
                onChange={handleEmailChange}
            />
            <TextField
                required
                id="outlined-required"
                label="Subject"
                value={subject}
                onChange={handleSubjectChange}
            />
            <TextField
                id="outlined-multiline-static"
                label="Email Body"
                value={message}
                fullWidth
                multiline
                rows={9}
                defaultValue=""
                required
                onChange={handleMessageChange}
            />
            <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={sendEmail} 
                sx={{ width: 200, padding: 1, margin: 2 }}
            >
                Send
            </Button>
                
        </Stack>
        <Snackbar 
            open={openAlert} 
            autoHideDuration={6000} 
            onClose={handleAlertClose}
        >
            <Alert 
            onClose={handleAlertClose} 
            severity={alert} 
            sx={{ width: '100%' }}>
                Email Sent!
            </Alert>
        </Snackbar>
        
    </div>
    )
}

export default ContactForm