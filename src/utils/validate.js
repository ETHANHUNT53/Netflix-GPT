
export const checkValidData = (isSignInForm,name,email,password)=>{

    const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isSignInForm){
        if(!isNameValid){
            return "Name is not valid"
        }
    }
    if(!isEmailValid){
        return "Email Id is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
    return null;
}