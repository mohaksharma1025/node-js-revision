# Node.js Fundamentals 🚀

## JavaScript Basics

1. JavaScript needs a browser to run because browsers provide a JavaScript engine.
2. Every browser has its own JavaScript engine, that is why JavaScript code performs differently in every browser.
   - Chrome → V8
   - Firefox → SpiderMonkey
   - Safari → JavaScriptCore
3. Node.js allows JavaScript to run outside the browser.
4. Node.js is a runtime environment for JavaScript.
---

## Modules in Node.js

Large applications are divided into modules to improve maintainability.

Example:
```js
const math = require("./math.js");
```

---

## File Handling in Node.js

### Synchronous (Blocking)

Import fs module:
```js
const fs = require("fs");
```

Create or overwrite a file:
```js
fs.writeFileSync("./test.txt", "Hello World");
```

Read a file:
```js
fs.readFileSync("./test.txt", "utf-8");
```

Append data without overwriting:
```js
fs.appendFileSync("./test.txt", new Date().toLocaleString());
```

Copy a file:
```js
fs.cpSync("source.txt", "destination.txt");
```

Delete a file:
```js
fs.unlinkSync("./test.txt");
```

Create nested folders:
```js
fs.mkdirSync("my-docs/a/b", { recursive: true });
```

---

### Asynchronous (Non-blocking)

```js
fs.writeFile("./test.txt", "Hello World", (err) => {
  if (err) console.log(err);
});
```

---
## JavaScript Event Loop (Overview)

JavaScript is **single-threaded**, which means it can execute **one task at a time**.

To handle multiple tasks efficiently, JavaScript uses the **Event Loop**.

---

### Why Event Loop is Needed
- JavaScript cannot block execution for long tasks
- Asynchronous operations (timers, API calls, file I/O) need special handling
- Event Loop allows **non-blocking execution**

---

### How Event Loop Works

1. JavaScript executes synchronous code using the **Call Stack**
2. Asynchronous tasks are sent to:
   - Web APIs (browser) or
   - Thread Pool (Node.js)
3. Once completed, their callbacks are placed in a **queue**
4. Event Loop checks:
   - Is Call Stack empty?
   - If yes, it pushes callback to Call Stack
5. Callback is executed

---

### Blocking vs Non-Blocking

- **Blocking operations**
  - Take more time
  - Can pause execution
  - Example: synchronous file read

- **Non-blocking operations**
  - Do not block execution
  - Handled asynchronously
  - Example: async file read, timers

---

## How Node.js Works (VERY IMPORTANT)

Client → Request → Server (Node.js)

Node.js follows an **Event Driven Architecture**.

- All requests go to the **Event Queue**
- Event Loop continuously watches the queue
- Event Loop checks request type

### Types of Operations

1. Non-blocking operations  
   - Handled directly by Event Loop

2. Blocking operations  
   - Sent to the **Thread Pool**

---

## Thread Pool

- Handles blocking operations
- Default size = **4 threads**
- If all threads are busy, tasks wait

Flow:
Event Loop → Thread Pool → Result → Event Loop

---

## Increasing Thread Pool Size

Thread pool size can be increased based on CPU cores.

Example:
```js
process.env.UV_THREADPOOL_SIZE = 12;
```

Recommended:
- Use **CPU cores − 1**

---

## Summary

- Node.js is single-threaded but scalable
- Uses Event Loop + Thread Pool
- Best for I/O intensive applications
- Very important for interviews



## NODE HTTP SERVER SETUP

- Name your main server file as `server.js` or `index.js`
- This file is the entry point where the Node.js server runs
- Node.js provides a built-in `http` module
- Import the `http` module to create a server

```js
const http = require("http");

const myServer = http.createServer((req, res) => {
  // handle incoming request
});
```

### createServer Explanation
- `createServer()` takes a callback function
- This callback runs on **every incoming request**
- It receives two arguments:
  - `req` → request object
  - `res` → response object

---

## HANDLING URL

**URL** stands for **Uniform Resource Locator**

A URL consists of multiple parts:

---

### 1. Protocol
The protocol defines **how data is transferred**.

- **HTTP** → HyperText Transfer Protocol
- **HTTPS** → HyperText Transfer Protocol Secure

**HTTP vs HTTPS**
- HTTPS is more secure
- HTTPS uses an **SSL certificate**
- HTTP does not use encryption

---

### 2. Domain Name
Example:
```
www.google.com
```

- Every domain is mapped to an **IP address**
- IP addresses are difficult to remember
- Domain names make websites easy to access for users

---

### 3. Path
Examples:
```
/        → root path
/about  → about page
```

- `/` represents the root path
- Paths help the server decide which response to send

---

### Example URL
```
https://www.google.com/
```

- `https` → protocol
- `www.google.com` → domain
- `/` → root path
  



  ### QUERY PARAMETER
**Query Parameters** are key–value pairs sent in the URL after `?` to pass additional data to the server.
 EXAMPLE: ``` https://www.profile.com/search?name=rahul&age=21```


 -HTTP MODULE DONT PARSE REQ.URL PROPERLY FOR PARAMS WE NEED EXTERNAL PACKAGE

 PACKAGE NAME IS URL
 npm install url


### HTTP Methods

- **GET** – Retrieve data from the server
- **POST** – Send data to the server (create resource)
- **PUT** – Update an existing resource (full update)
- **PATCH** – Update part of a resource
- **DELETE** – Remove a resource

### INTRODUCTION TO EXPRESS
 - Express is a library of Node js , it helps to make apis easier .It is more scalable.

 -COMMAND TO INSTALL - npm install express

  

 📌 Versioning

This project follows Semantic Versioning (SemVer) to manage releases and track changes clearly.

🔢 Version Format
MAJOR.MINOR.PATCH

📖 Version Breakdown

MAJOR – Breaking changes (existing functionality may stop working)

MINOR – New features added (backward compatible)

PATCH – Bug fixes and small improvements

✅ Version Examples
Version	Description
0.1.0	Initial Node.js practice setup
0.2.0	Added Express server
0.3.0	Added API routes
0.3.1	Fixed minor API bug
1.0.0	First stable release
1.1.0	Added authentication feature
1.1.1	Fixed login bug
2.0.0	Major refactor (breaking changes)
🧪 Development Versions

Used during learning and practice phase:

0.1.0 → Project setup
0.2.0 → Feature additions
0.3.0 → API & middleware

🏷️ Git Tagging (Optional)
git tag v1.0.0
git push origin v1.0.0

📂 Current Version
v1.0.0

💡 Why Versioning?

Keeps track of project progress

Makes the project professional

Easy to understand changes

Industry-standard practice