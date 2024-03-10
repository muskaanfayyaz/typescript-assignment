// Define an array of guests
let guestList: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift({
    name: "alia",
    message: "Dear alia, I would be honored to have you join us for dinner."
});

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, {
    name: "Adanan",
    message: "Dear Adanan, I would be delighted to have you as my guest for dinner."
});

// Add one new guest to the end of the array
guestList.push({
    name: "Nikil",
    message: "Dear Nikil,It would be a pleasure to have you join us for dinner."
});

// Print invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});
