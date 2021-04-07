const _ = require("lodash")

const changes = [
    { id: 1, username: "user", password: "password" },
    { phone: "123456789", user: "new user", password: "123456" },
    { email: "example@gmail.com", username: "example" },
    { phone: "987654321" },
]

const calculateState = (changes) => {
    let id = _.find(changes, {id: 1});
    let username = _.find(changes, {username: "example"});
    let password = _.find(changes, {password: "123456"});
    let phone = _.find(changes, {phone: "987654321"});
    let user = _.find(changes, {user: "new user"});
    let email = _.find(changes, {email: "example@gmail.com"});

    return {
        id: id.id,
        username: username.username,
        password: password.password,
        phone: phone.phone,
        user: user.user,
        email: email.email
    }
};

console.log(calculateState(changes))