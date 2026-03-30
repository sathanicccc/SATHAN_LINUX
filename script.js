// WINDOW MANAGER LOGIC

// Global variable to keep track of active window z-index
let zIndexCounter = 100;

function openTool(id) {
    const windowLayer = document.getElementById('window-layer');
    const win = document.getElementById(id);
    if(!win) return; // Exit if window not found

    // Move clicked window to the front
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
    
    // Switch to flex to show and center the contents
    win.style.display = 'block';

    // Optional: add a realistic sound effect when opening (requires user interaction first)
    // new Audio('assets/sound_open.mp3').play();

    // Specific logic for new tools
    if(id === 'msf-win') triggerFakeMSF();
    if(id === 'cam-win') triggerFakeError();
}

function closeTool(id) {
    const win = document.getElementById(id);
    if(win) win.style.display = 'none';
}

// Fullscreen Fake Error Overlay trigger (Used on Cam Hack)
function triggerFakeError() {
    const err = document.getElementById('error-overlay');
    err.style.display = 'block';
    // Realistic Console logs
    console.warn("CRITICAL: ACCESS_DENIED_BY_KERNEL_5.1");
    setTimeout(() => { err.style.display = 'none'; }, 2500);
}

// MATRIX RAIN EFFECT LOGIC (Optional, recommended)
function startMatrixEffect() {
    const canvas = document.getElementById('matrix-bg');
    if(!canvas) return; // Exit if not present
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px arial";
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) drops[i] = 0;
            drops[i]++;
        }
    }
    // Set frequency (fast)
    setInterval(drawMatrix, 35);
}

// Clock
setInterval(() => {
    document.getElementById('sys-clock').innerText = new Date().toLocaleTimeString();
}, 1000);

// Initialize effects
startMatrixEffect();

