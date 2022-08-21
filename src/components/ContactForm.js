import { TextField, Stack, Button, Alert, Snackbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

function ContactForm() {

    const [email, setEmail] = React.useState('');
    const [fullname, setFullname] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alert, setAlert] = React.useState('info');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };
    const handleFullnameChange = (event) => {
        setFullname(event.target.value)
    };
    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };

    const handleValidation = () => {
        let formValid = true;
        email.includes("@") ? email : formValid = false;
        email.includes(" ") ? formValid = false : email;
        fullname != '' ? fullname : formValid = false;
        subject != '' ? subject : formValid = false;
        message != '' ? message : formValid = false;
        return formValid;
    }
    const sendEmail = async (e) => {
        e.preventDefault();
    
        if(!handleValidation()){
            setOpenAlert(true);
            setAlert("warning")
            console.log("Not Valid Inputs");
            return;
        }
        const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            setOpenAlert(true);
            setAlert("error")
            console.log(error);
            return;
        }
        setEmail('');
        setFullname('');
        setSubject('');
        setMessage('');
        setOpenAlert(true);
        setAlert("success");
    };

    const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    
    
    setOpenAlert(false);
    setAlert('info');
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
                label="Your Full Name"
                value={fullname}
                onChange={handleFullnameChange}
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
                {alert === 'success'? "Email Sent!": alert === 'warning' ? "Invalid inputs" : "Error Sending Email"}
            </Alert>
        </Snackbar>
        
    </div>
    )
}

export default ContactForm