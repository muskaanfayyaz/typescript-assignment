//  current usernames
const current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];

//  new usernames
const new_users: string[] = ['user3', 'user6', 'user7', 'user8', 'user9'];

// Loop through the new_users list to check for uniqueness
for (const new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username "${new_username}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}
