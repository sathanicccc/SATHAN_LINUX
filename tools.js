// TOOL EXPLOIT SIMULATIONS

// 1. [NEW] Metasploit.io Framework Console Simulation (Fast, detailed)
function triggerFakeMSF() {
    const output = document.getElementById('msf-output');
    output.innerHTML = ""; // Clear existing

    let msf_text = [
        '<span class="msf-dragon">   _____       _______ _    _          _   _ <br>  / ____|   /\\|__   __| |  | |   /\\   | \\ | |<br> | (___    /  \\  | |  | |__| |  /  \\  |  \\| |<br>  \\___ \\  / /\\ \\ | |  |  __  | / /\\ \\ | . ` |<br>  ____) |/ ____ \\| |  | |  | |/ ____ \\| |\\  |<br> |_____//_/    \\_\\_|  |_|  |_/_/    \\_\\_| \\_|</span>',
        "<br> BLACK & GREEN Framework [v5.0-dev]",
        " [-] System status: <span style='color:green'>COMPROMISED</span>",
        "<br> [+] Initializing MSF Exploit Library...",
        " [+] Loading CVE modules...",
        "<br>msf6 > search cve:2024-5123",
        " [+] <span class='msf-prompt'>Searching database...</span>",
        "<br> Matching Modules",
        " ===============",
        " # Name Date Rank Description",
        " - ---- ---- ---- -----------",
        " 0 exploit/windows/http/sathan_core 2024-03-15 high Sathan CMS file_upload",
        "<br>msf6 exploit(sathan_core) > set RHOSTS 192.168.1.100",
        "RHOSTS => 192.168.1.100",
        "msf6 exploit(sathan_core) > exploit",
        "<br> [+] Started reverse handler...",
        " [+] Target is Windows 11... sending payload...",
        " [+] <span style='color:green'>Meterpreter session 1 opened!</span>",
        "<br>meterpreter > sysinfo",
        " Computer: TARGET_LAB",
        " OS: Windows 11 Build 22621",
        " Arch: x64",
        "meterpreter > getuid",
        " User: <span style='color:red; font-weight:bold;'>NT AUTHORITY/SYSTEM</span>"
    ];

    let i = 0;
    const msfTask = setInterval(() => {
        if(i >= msf_text.length) {
            output.innerHTML += `<br><span class='msf-prompt'>meterpreter ></span> Ready.`;
            clearInterval(msfTask);
        } else {
            output.innerHTML += msf_text[i] + "<br>";
            // Fast scrolling effect
            const body = document.getElementById('msf-output');
            body.scrollTop = body.scrollHeight;
            i++;
        }
    }, 450); // Fast speed (450ms)
}

// 2. [NEW] Credential Harvester (Fake Phish Page)
function fakePhish() {
    const user = document.getElementById('fake-user').value;
    const pass = document.getElementById('fake-pass').value;
    const status = document.getElementById('phish-status');

    if(!user || !pass) { alert("Missing credentials!"); return;}

    status.innerHTML = "Authenticating with target server...";
    
    setTimeout(() => {
        status.innerHTML = `<span style="color:green">Credentials CAPTURED:</span><br><b>${user}:${pass}</b>`;
        // Realistic console log
        console.log(`[PWA_HARVEST] User: ${user} Pass: ${pass}`);
    }, 1800);
}

// 3. [NEW] DoS Controller Simulation
function fakeDoS() {
    const bar = document.getElementById('dos-bar');
    const btn = document.getElementById('dos-btn');
    if(btn.disabled) return;

    btn.disabled = true;
    btn.innerText = "ATTACK ACTIVE";
    
    let width = 0;
    const dosTask = setInterval(() => {
        if(width >= 100) {
            btn.innerText = "TARGET DOWN";
            clearInterval(dosTask);
            setTimeout(() => { btn.disabled = false; btn.innerText = "START FLOOD"; bar.style.width="0%";}, 3000);
        } else {
            // Speed up based on progress
            let jolt = Math.random() * 5 + 1;
            width += jolt;
            bar.style.width = width + "%";
        }
    }, 120); // Fast frequency (120ms)
}

// 4. [NEW] Botnet Manager Simulation
let currentBots = 0;
function fakeBotConnect() {
    const bot_log = document.getElementById('bot-log');
    const count = document.getElementById('bot-count');
    
    if(currentBots > 0) return; // Prevent double trigger
    
    bot_log.innerHTML = "Deploying Zombies...<br>";
    let i = 0;
    currentBots = 1;
    
    const botTask = setInterval(() => {
        if(i >= 120) {
            bot_log.innerHTML += "<br>[DONE] Botnet Deployed on 120 nodes.";
            currentBots = 0; // reset
            clearInterval(botTask);
        } else {
            // Realistic fake names
            let regions = ['JP', 'US', 'IN', 'EU', 'RU', 'CN'];
            let region = regions[Math.floor(Math.random() * regions.length)];
            
            bot_log.innerHTML += `[Bot_${i+1}_${region}]: CONNECTED OK<br>`;
            count.innerText = i+1;
            bot_log.scrollTop = bot_log.scrollHeight;
            i += 1;
        }
    }, 200); // 200ms interval
}

