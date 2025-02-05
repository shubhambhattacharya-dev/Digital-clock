const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minutes");
const secondEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

function Clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        if (h > 12) {
            h = h - 12;
        }
        ampm = "PM";
    }

    // Add leading zeros if needed
    hourEl.innerText = h < 10 ? "0" + h : h;
    minutEl.innerText = m < 10 ? "0" + m : m;
    secondEl.innerText = s < 10 ? "0" + s : s;
    ampmEl.innerText = ampm;

    setTimeout(Clock, 1000); // Call Clock again every second
}

Clock(); // Start the clock