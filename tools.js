function runBomb() {
    const num = document.getElementById('target').value;
    const log = document.getElementById('bomb-log');
    if(num.length < 10) return alert("Target Required!");

    log.innerHTML = "[!] CONNECTING TO MAIN-FRAME...<br>";
    let i = 0;
    const task = setInterval(() => {
        if(i > 20) {
            log.innerHTML += `<br>[DONE] SERVER OVERLOADED! PACKETS SENT TO ${num}`;
            clearInterval(task);
        } else {
            log.innerHTML += `[+] BYPASSING OTP_SEC_${i}... SUCCESS<br>`;
            log.scrollTop = log.scrollHeight;
            i++;
        }
    }, 300);
}

// More fake tools
function openTool(id) {
    document.getElementById(id).style.display = 'block';
    // Realistic Console logs for every tool
    if(id === 'db-win') {
        alert("ACCESS GRANTED: Fetching User Database...");
        console.log("SQL INJECTION: SELECT * FROM USERS WHERE STATUS='ROOT'");
    }
}

