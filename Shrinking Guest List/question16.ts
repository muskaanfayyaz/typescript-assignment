// Define an array of guests
let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print message about the limitation on the number of invites
console.log("Sorry, due to unforeseen circumstances, we can only invite two guests for dinner.");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest)
        console.log(`Sorry, ${removedGuest}, you're no longer invited to the dinner.`);
}

// Print invitation messages to the remaining two guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});

