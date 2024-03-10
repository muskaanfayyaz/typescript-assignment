function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\""));
}
// Creating large shirt with default message
make_shirt();
// Creating medium shirt with default message
make_shirt("Medium");
// Creating shirt of any size with a different message
make_shirt("Small", "Keep coding!");
