//input
const name = "JohnDoe";
const password = "Password123";

//db
const dbName = "JohnDoe";
const dbPassword = "Password123";  

if (name === dbName && password === dbPassword) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}