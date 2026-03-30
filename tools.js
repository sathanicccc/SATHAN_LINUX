// Realistic Tool Simulations

// OTP BOMBER Simulation
function startBombing() {
    const target = document.getElementById('target').value;
    const count = document.getElementById('count').value;
    const status = document.getElementById('op-status');
    const bombBtn = document.querySelector('.bomb-btn');

    // Validations
    if (target.length !== 10) { alert("Enter 10-digit number."); return; }
    if (count > 10000000|| count <= 0) { alert("Max limit is 10000000"); return; }

    status.innerHTML = "Initializing API hooks...";
    bombBtn.disabled = true; // Prevent double clicking
    bombBtn.innerText = "ATTACKING...";

    let current = 0;
    // Fast Response Speed (400ms interval)
    const interval = setInterval(() => {
        if (current >= count) {
            status.innerHTML += `<br><span style="color:#0f0; font-weight:bold;">ATTACK FINISHED ON ${target}.</span>`;
            bombBtn.disabled = false;
            bombBtn.innerText = "START ATTACK";
            clearInterval(interval);
        } else {
            // Fake API service names for realism
            let services = ['JioAPI', 'ViAPI', 'AirtelNet', 'AmazonOTP'];
            let service = services[Math.floor(Math.random() * services.length)];
            
            status.innerHTML = `[${current+1}/${count}] HTTP 200 via ${service} -> OK`;
            current++;
            
            // Auto-scroll status panel
            const body = document.querySelector('.tool-body');
            body.scrollTop = body.scrollHeight;
        }
    }, 400); 
}

// IP Tracker Simulation
function trackIP() {
    const ip = prompt("Enter IP to track:");
    if(!ip) return;
    const status = document.getElementById('op-status');
    status.innerHTML = "Querying Database...";
    setTimeout(() => {
        status.innerHTML = `Tracked IP ${ip}: <br>Loc: Kerala, IN<br>ISP: JioFiber<br>Hacked: YES`;
    }, 1500);
}

// Port Scan Simulation
function portScan() {
    const status = document.getElementById('op-status');
    status.innerHTML = "Scanning Port 80... [CLOSED]";
    setTimeout(() => { status.innerHTML += "<br>Scanning Port 22... [OPEN]"; }, 1000);
    setTimeout(() => { status.innerHTML += "<br>SCAN DONE."; }, 2000);
}
