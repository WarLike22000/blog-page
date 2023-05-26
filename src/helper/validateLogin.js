const validation = (value) => {
    const errors = {};
    
    // email
    if(!value.email) {
        errors.email = 'Please enter your Email!'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
        errors.email = 'Please enter a valid Email!'
    } else {
        delete errors.email
    }

    //password
    if(!value.password) {
        errors.password = 'Please enter your Password!'
    } else if(value.password.length < 6) {
        errors.password = 'Please enter more than 6 characters!'
    } else {
        delete errors.password
    }

    return errors;
}

export default validation;