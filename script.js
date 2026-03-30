// Window Handling
function openTool(id) {
    document.getElementById(id).style.display = 'block';
    if(id === 'cam-win') triggerFakeError();
}
function closeTool(id) { document.getElementById(id).style.display = 'none'; }

function triggerFakeError() {
    const err = document.getElementById('error-overlay');
    err.style.display = 'block';
    setTimeout(() => { err.style.display = 'none'; }, 2000);
}

// Matrix Rain Effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// Clock
setInterval(() => { document.getElementById('sys-clock').innerText = new Date().toLocaleTimeString(); }, 1000);

