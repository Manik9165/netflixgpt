// This file contains validation checks for email, pwd, and name field. 

const Validations = (email, password, firstName) => {

    const isValidEmail = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isValidEmail) return "Invalid Email !!";
    if(!isValidPassword) return "Invalid Password";

    return null;
}

export default Validations;