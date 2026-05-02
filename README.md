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
| 🌐 Offline Support | Works without internet (Service Worker) |
| 📲 Mobile Responsive | Works on all screen sizes |

---

## 📁 Project Structure

```
my-calculator/
  ├── index.html       # App structure & buttons
  ├── style.css        # Dark theme & responsive layout
  ├── calc.js          # All JavaScript logic
  ├── manifest.json    # PWA configuration
  ├── sw.js            # Service Worker (offline)
  ├── icon-192.png     # App icon (small)
  └── icon-512.png     # App icon (large)
```

---

## 🧠 JavaScript Concepts Used

- **State Management** — Single state object tracks current, prev, op, evaled
- **Event Delegation** — One listener handles all 19 buttons
- **DOM Manipulation** — Dynamic history list rendering
- **Service Worker** — Caches files for offline use
- **PWA** — manifest.json for installable app
- **Responsive Design** — CSS media queries for mobile

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/areej0345/my-calculator-.git

# 2. Open the folder
cd my-calculator-

# 3. Open in browser
# Just open index.html in Chrome/Edge
# Or use Live Server in VS Code
```

---

## 📱 Install as App

1. Open the live demo in **Chrome**
2. Click the **install icon** in the address bar
3. Click **Install** — done! 🎉

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 👩‍💻 Author

**Areej Ali Mustafa** — Built from scratch as a JavaScript learning project

⭐ Agar pasand aaya toh **star** zaroor karo!
