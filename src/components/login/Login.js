import Button from "../UI/Button"
import React,{useReducer} from "react"
import classes from "./Login.module.css"


const initialEmailState = {
    email:'',
    emailValid:false,
    password:'',
    passwordIsValid:false,
    formIsValid:false,
};


const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const EMAIL_VALID='EMAIL_VALID';
const PASSWORD_VALID='PASSWORD_VALID';
const FORM_IS_VALID='FORM_IS_VALID';


const emailAndPasswordReducer = (state,action) => {
    console.log(action,'hgf');
    if(action.type === EMAIL) {
        return{
            ...state,
            email:action.value,
            emailValid:action.value.includes('@')
        }; 
    }
  if(action.type === PASSWORD) {
    return{
        ...state,
        password:action.value,
        passwordIsValid:action.value.length > 6
    }
  }
  return state;
};



const Login = (props) => {
    const [emailAndPassword,dispatchEmailAndPassword]=useReducer(emailAndPasswordReducer,initialEmailState)

    // const [enteredEmail,setEnteredEmail] = useState('');
    // const [emailIsValid,setEmailIsValid] = useState();
    // const [enteredPassword,setEnteredPassword] = useState('');
    // const [passwordIsValid,setPasswordIsValid] = useState();
    // const [formIsValid,setFormIsValid] = useState(false);

    const emailChangeHandler = (e) => {
        dispatchEmailAndPassword({type:EMAIL,value:e.target.value})

        // setEnteredEmail(e.target.value);
        // setFormIsValid (
        //     e.target.value.includes('@') && enteredPassword.trim().length > 6
        // )
    }

    const passwordChangeHandler = (e) => {
        dispatchEmailAndPassword({type:PASSWORD,value:e.target.value}) 
        // setEnteredPassword(e.target.value)
        // setFormIsValid (
        //     e.target.value.includes('@') && enteredEmail.trim().length > 6
        // )
    }

    // const validEmailHandler  = () => {
    //     setEmailIsValid(enteredEmail.includes('@')); //есть ли собачка  
    // }
    // const validPasswordlHandler  = () => {
    //     setPasswordIsValid(enteredPassword.trim().length >6)
    // }


    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     props.onLoggin(enteredEmail,enteredPassword);
    // }



     return (
      <div>
 <form 
//  onSubmit={submitHandler}
 >
        <div 
        // className={`${classes.contol} ${
        // emailIsValid === false ? classes.invalid : ''
        // }`}
        
        >
            <label htmlFor="email">E-Mail</label>
            <input
            type="email"
            id="email"
            value={emailAndPassword.email}
            onChange={emailChangeHandler}
            // onBlur={validEmailHandler}
            />
        </div>
        <div 
        // className={`${classes.control} ${
        //     passwordIsValid == false ? classes.invalid :''
        // }`}
        >
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            value={emailAndPassword.password}
            onChange={passwordChangeHandler}
            // onBlur={validPasswordlHandler}
            />
        </div>
        <div className={classes.actions}>
            <Button 
            onClick={props.onLogin}
            type="submit" 
            className={classes.btn} 
            // disabled={!formIsValid}
            >
            Login
            </Button>
        </div>

       </form>
       </div> 

        
      
     )
}


export default Login;