// Array of usernames
const usernames: string[] = ['admin', 'ahmed', 'alsa', 'zubair', 'hassan'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
