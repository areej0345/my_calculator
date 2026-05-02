# 🧮 My Calculator

A fully-featured calculator web app built with pure **HTML, CSS, and JavaScript** — no frameworks, no libraries.

## 🌐 Live Demo
👉 **[https://resplendent-rolypoly-7bd8f3.netlify.app](https://resplendent-rolypoly-7bd8f3.netlify.app)**

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Basic Calculator | Addition, Subtraction, Multiplication, Division |
| 🔬 Scientific Mode | sin, cos, tan, log, ln, √x, x², x³, 1/x, π |
| 📜 History Panel | Saves last 20 calculations, click to recall |
| 🧠 Memory | MC, MR, M+, MS memory operations |
| ⌨️ Keyboard Support | Full keyboard input support |
| ⌫ Backspace | Delete last digit |
| 📱 PWA | Installable as a desktop/mobile app |
| 🌐 Offline Support | Works without internet via Service Worker |
| 📲 Mobile Responsive | Works perfectly on all screen sizes |

---

## 📁 Project Structure

```
my-calculator/
  ├── index.html       # App structure & buttons
  ├── style.css        # Dark theme & responsive layout
  ├── calc.js          # All JavaScript logic
  ├── manifest.json    # PWA configuration
  ├── sw.js            # Service Worker (offline support)
  ├── icon-192.png     # App icon (small)
  └── icon-512.png     # App icon (large)
```

---

## 🧠 Key JavaScript Concepts Used

- **State Management** — A single state object tracks current value, previous value, operator, and evaluation flag
- **Event Delegation** — One event listener handles all 19 buttons efficiently
- **DOM Manipulation** — History list is dynamically rendered using JavaScript
- **Service Worker** — Caches all files for offline functionality
- **PWA** — manifest.json enables the app to be installed on any device
- **Responsive Design** — CSS media queries ensure mobile compatibility

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/areej0345/my-calculator-.git

# 2. Navigate to the folder
cd my-calculator-

# 3. Open in your browser
# Simply open index.html in Chrome or Edge
# Or use the Live Server extension in VS Code
```

---

## 📱 How to Install as an App

1. Open the live demo in **Chrome**
2. Click the **install icon (⊕)** in the address bar
3. Click **Install** — that's it! 🎉

The app will appear on your desktop or home screen like a native app.

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 👩‍💻 About

Built by **Areej Ali Mustafa** — a BS Computer Science student passionate about building clean, functional web applications.

This project was built from scratch as part of a JavaScript learning journey — no frameworks, just pure web fundamentals.

⭐ If you found this project helpful, please consider giving it a **star**!
