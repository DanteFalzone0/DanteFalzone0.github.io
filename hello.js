var user_input = window.prompt("Hi! What's your name?");
var sanitized_input = user_input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
document.write("Welcome to Dante's webpage, "+sanitized_input+"!");


