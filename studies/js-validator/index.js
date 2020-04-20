const user1 = {
    age: 18,
    pass: "12124123"
}

const user2 = {
    age: 12,
    pass: "12310292318093"
}

// validator rules
const oldEnough = ({ age }) => age >= 18;
const passwordLongEnough = ({ password }) => password.length > 5;
//

const createValidator = (...tests) => {
    return (userObj) => {
        return tests.every(test => test(userObj));
    }
}

const userValidator = createValidator(oldEnough, passwordLongEnough);

userValidator(user1);
userValidator(user2);
