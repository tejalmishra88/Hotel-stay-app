
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import { useValue } from '../../context/ContextProvider';
import { useEffect, useRef, useState } from 'react';
import { Close, Send} from '@mui/icons-material';
import PasswordField from './PasswordField';
import GoogleOneTapLogin from './GoogleOneTapLogin';

const Login = () => {
    const{state:{openLogin}, dispatch} = useValue();
    const [title, setTitle] = useState('Login');
    const [isRegister, setIsRegister] = useState(false);
    const nameRef = useRef();
    //const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

const handleClose = ()=>{
    dispatch({type:'CLOSE_LOGIN'});
};
    
const handleSubmit = (e) =>{
    e.preventDefault()
    //testing loading
    dispatch({ type: 'START_LOADING' });

    setTimeout(() => {
      dispatch({ type: 'END_LOADING' });
    }, 6000);

    //testing Notification
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
          message: 'Passwords do not match',
        },
      });
    }
  };
 useEffect(() => {
    isRegister ? setTitle('Register') : setTitle('Login');
  }, [isRegister]);
  return (
   <Dialog
    open={openLogin}
    onClose={handleClose}
   >
    <DialogTitle>
        {title}
        <IconButton 
        sx={{position:'absolute',  top:8, right:8,color:(theme)=>theme.palette.grey[500]}} onClick={handleClose}>
            <Close/>
        </IconButton>
    </DialogTitle>
    <form onSubmit={handleSubmit}>
        <DialogContent dividers>
            <DialogContentText>
                Please fill your info 
            </DialogContentText>
            {isRegister && 
            <TextField autoFocus margin='normal' varient='standard' id='email' label='Email' type='text'
              fullWidth inputRef={nameRef} inputProps={{minLength:2 }} required/>}

              <TextField autoFocus={!isRegister} margin='normal' varient='standard' id='name' label='Name' type='text'
              fullWidth inputRef={nameRef} inputProps={{minLength:2 }} required/>
             <PasswordField {...{ passwordRef }} />
          {isRegister && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
            />
          )}
        </DialogContent>
        <DialogActions sx={{px: '19px'}}>
            <Button type='submit' varient='contained' endIcon={<Send/>}>
                Submit
            </Button>
        </DialogActions>
    </form>
            <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
                {isRegister? 'do you have an account? Sign in now' : "don't you have an account? create now"}
                <Button onClick={() => setIsRegister(!isRegister)}>
                    { isRegister ? 'Login' : 'Register'}
                </Button>
            </DialogActions>
            <DialogActions sx={{justifyContent:'center', py:'24px'}}>
                <GoogleOneTapLogin/>
            </DialogActions>
   </Dialog>
  )
}

export default Login