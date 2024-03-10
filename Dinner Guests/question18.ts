// Define an array of guests
const guestList: { name: string; message: string }[] = [
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

// Print invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
