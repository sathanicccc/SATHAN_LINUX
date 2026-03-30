const input = document.getElementById('user-input');
const history = document.getElementById('cmd-history');

// Enter Key Listener for Terminal
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        addHistory(`kali@sathan:~$ ${input.value}`);
        input.value = ''; // Fast Clear
        processCommand(cmd);
        scrollToBottom();
    }
});

function addHistory(text, type = 'user') {
    const p = document.createElement('p');
    p.className = type === 'sys' ? 'white-text' : '';
    p.innerHTML = text;
    history.appendChild(p);
}

// OS Command Processing
function processCommand(cmd) {
    switch(cmd) {
        case 'tools':
            document.getElementById('tool-win').style.display = 'flex';
            addHistory("[+] Hacking Panel Activated.", 'sys');
            break;
        case 'clear':
            history.innerHTML = '';
            document.getElementById('term-output').querySelector('.ascii-art').style.display = 'block';
            break;
        case 'help':
            addHistory("Available commands: <br>- tools: Open Hacking Toolkit<br>- clear: Clear Screen<br>- about: System Info<br>- reboot: Reload Site");
            break;
        case 'reboot':
            location.reload();
            break;
        case '': break; // Empty command
        default:
            addHistory(`Command '${cmd}' not found. Type 'help'.`);
    }
}

// Helper: Toggle Window Display
function toggleWindow(id) {
    const win = document.getElementById(id);
    win.style.display = (win.style.display === 'none') ? 'flex' : 'none';
}

function scrollToBottom() {
    const body = document.getElementById('term-output');
    body.scrollTop = body.scrollHeight;
}

// Clock
setInterval(() => {
    document.getElementById('sys-clock').innerText = new Date().toLocaleTimeString();
}, 1000);

// Auto-focus Terminal Input on load
window.onload = () => input.focus();
