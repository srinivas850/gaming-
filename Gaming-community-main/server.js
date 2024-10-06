const http = require("http");
const fs = require("fs");
const path = require("path");
const { URLSearchParams } = require("url");
const port = 8288;

// File paths for different pages
const filePathFirst = path.join(__dirname, "gameman", "index.html");
const filePathLogin = path.join(__dirname, "gameman", "sign.html");
const filePathRegister = path.join(__dirname, "gameman", "registration1.html");

// File paths for static assets
const filePathStyle = path.join(__dirname, "gameman", "style.css");
const filePathImagesJs = path.join(__dirname, "gameman", "images.js");
const filePathScriptJs = path.join(__dirname, "gameman", "script.js");
const filePathScrollJs = path.join(__dirname, "gameman", "scroll.js");

// File to store user data
const dataFile = path.join(__dirname, "users.json");

// Load existing users or initialize an empty array if the file doesn't exist
let users = [];
if (fs.existsSync(dataFile)) {
    try {
        const rawData = fs.readFileSync(dataFile);
        users = JSON.parse(rawData);
    } catch (error) {
        console.error("Error reading users.json:", error);
    }
} else {
    // Create an empty file if it doesn't exist
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
}

// Creating the server
const api = http.createServer((req, res) => {
    // Routing logic

    // Handle registration form submission
    if (req.url === "/submit" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const formData = new URLSearchParams(body);
            const name = formData.get("fullname");
            const email = formData.get("email");
            const password = formData.get("password");

            // Check if the email is already registered
            const userExists = users.find(user => user.email === email);

            if (userExists) {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "User already registered. Please login." }));
            } else {
                // Register the user
                const newUser = { name, email, password };
                users.push(newUser);

                try {
                    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
                    console.log("User registered:", newUser);
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Registration successful. You can now log in." }));
                } catch (error) {
                    console.error("Error writing to users.json:", error);
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Error saving user data." }));
                }
            }
        });
    }

    // Handle login form submission
    else if (req.url === "/sign" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const formData = new URLSearchParams(body);
            const email = formData.get("email");
            const password = formData.get("password");

            // Check if the email exists in the user data
            const user = users.find(user => user.email === email);

            if (!user) {
                // Return error message if user is not found
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "You have not been registered." }));
            } else if (user.password !== password) {
                // Return error message if password is incorrect
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Incorrect password." }));
            } else {
                // Successful login
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "You have logged in successfully." }));
            }
        });
    }

    // Serve index page
    else if (req.url === "/" || req.url === "/index.html") {
        res.setHeader("Content-Type", "text/html");
        fs.readFile(filePathFirst, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading first page");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    }

    // Serve register page
    else if (req.url === "/registration" || req.url === "/registration1.html") {
        res.setHeader("Content-Type", "text/html");
        fs.readFile(filePathRegister, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading register page");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    }

    // Serve login page
    else if (req.url === "/sign" || req.url === "/sign.html") {
        res.setHeader("Content-Type", "text/html");
        fs.readFile(filePathLogin, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading login page");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    }

    // Serve static files (CSS, JS)
    else if (req.url === "/style.css") {
        res.setHeader("Content-Type", "text/css");
        fs.readFile(filePathStyle, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading CSS file");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/images.js") {
        res.setHeader("Content-Type", "application/javascript");
        fs.readFile(filePathImagesJs, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading images.js file");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/script.js") {
        res.setHeader("Content-Type", "application/javascript");
        fs.readFile(filePathScriptJs, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading script.js file");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/scroll.js") {
        res.setHeader("Content-Type", "application/javascript");
        fs.readFile(filePathScrollJs, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading scroll.js file");
                console.error(err);
            } else {
                res.end(data);
            }
        });
    }

    // 404 for undefined routes
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Page not found");
    }
});

// Start the server
api.listen(port, function () {
    console.log(`Server started on http://localhost:${port}`);
});
