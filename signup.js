function signup(userName) {
    let usernames = ["ram", "sita", "gita", "hari"];

    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        usernames.push(userName);
        return "Signup Successful, Please Login";
    }
}
