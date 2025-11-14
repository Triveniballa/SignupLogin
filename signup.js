function signup(userName) {
    let usernames = ["ram", "sita", "gita", "hari"];

    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        usernames.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let usernames = ["ram", "sita", "gita", "hari"];
    let correctPassword = "Emp@123";

    if (!usernames.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password !== correctPassword) {
        return "Wrong Password....";
    }

    return "Login Successful...";
}

