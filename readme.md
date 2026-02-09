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
