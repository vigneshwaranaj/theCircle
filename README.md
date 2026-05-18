📘 The Circle – Interactive Size-Changing Animation

https://vigneshwaranaj.github.io/theCircle/

The Circle is a simple, interactive HTML/CSS/JavaScript project demonstrating DOM manipulation, event handling, and smooth animations.
This project features a clickable (and touch-friendly) circle that grows and shrinks dynamically based on user interaction and screen size.

🚀 Project Overview

This project displays a circle at the center of the screen. When the user:

Clicks or taps the circle → It doubles in size
The circle continues growing until it reaches the max possible size based on the browser window
Once the maximum size is reached → Further interactions make the circle shrink
When the circle shrinks back to the minimum size (24px), it resets and begins growing again

This creates a smooth loop of growth → shrink → reset → growth.

The project is built using:

HTML for structure
CSS for styling & animations
JavaScript for interaction logic
🧩 Features

✔ Interactive click & touch functionality
✔ Dynamic resizing based on viewport size
✔ Smooth animated transitions
✔ Fully responsive
✔ Minimal, clean, and easy-to-read code
✔ Great starter example for DOM manipulation

📁 Project Structure
/project-folder
|── index.html
|── styles.css
|── script.js
📝 How It Works
1. Centered Circle

The circle is placed in the center of the screen using CSS:

.simple_circle {
    background-color: #28104e;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
2. Growth & Shrink Logic

In script.js, a variable circleSize controls the current size of the circle.

If doubling the size still fits inside the window → grow
Otherwise → shrink
Minimum size allowed = 24px
if (circleSize * 2 <= window.innerWidth &&
    circleSize * 2 <= window.innerHeight &&
    !reachedMaxSize) {

    circleSize *= 2;
} else {
    reachedMaxSize = true;
    circleSize = Math.max(circleSize / 2, 24);

    if(circleSize == 24){
        reachedMaxSize = false;
    }
}
3. Touch & Click Support

It works on both mobile and desktop:

circle.addEventListener('click', handleClickOrTap);
circle.addEventListener('touchstart', handleClickOrTap);
📦 How to Run the Project Locally
Download or clone the repository
Open the folder
Double-click index.html

That's it — no build process required.



