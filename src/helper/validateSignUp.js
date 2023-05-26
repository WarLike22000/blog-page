const validation = (value) => {
    const errors = {};

    // full name
    if(!value.fullName.trim()) {
        errors.fullName = 'Please enter your Full Name!'
    } else {
        delete errors.fullName
    }

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

    //phone number
    if(!value.phoneNumber) {
        errors.phoneNumber = 'Please enter your phone Number!'
    } else if(!/09(1[0-9]|3[1-9]|2[1-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}/g.test(value.phoneNumber)) {
        errors.phoneNumber = 'Please enter a valid Phone Number!'
    } else {
        delete errors.phoneNumber
    }

    return errors;
}

export default validation;