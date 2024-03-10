//  current usernames
var current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
//  new usernames
var new_users = ['user3', 'user6', 'user7', 'user8', 'user9'];
// Loop through the new_users list to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    if (current_users.includes(new_username)) {
        console.log("The username \"".concat(new_username, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_username, "\" is available."));
    }
}
