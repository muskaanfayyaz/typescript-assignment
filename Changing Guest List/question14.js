var guestList = [
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
var replacementGuest = {
    name: "Albert",
    message: "Dear Albert, I would be delighted to invite you to join us for dinner. Your contributions to science have had a profound impact on humanity"
};
// Find the index of the guest who can't make it and replace them with the replacement guest
var guestIndex = guestList.findIndex(function (guest) { return guest.name === "Ahmed"; });
if (guestIndex !== -1) {
    guestList[guestIndex] = replacementGuest;
}
// Print invitation messages to each guest
guestList.forEach(function (guest) {
    console.log("Invitation to ".concat(guest.name, ": ").concat(guest.message));
});
