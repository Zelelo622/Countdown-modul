const year = document.querySelector('.year');
const days = document.querySelector('.days');
const hourse = document.querySelector('.hourse');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = nextYear.getFullYear();

function updateTime() {
    const currentTime = new Date();
    const differenceTime = nextYear - currentTime;

    const daysLeft = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
    const hourseLeft = Math.floor(differenceTime / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(differenceTime / 1000 / 60) % 60;
    const secondsLeft = Math.floor(differenceTime / 1000) % 60;

    days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hourse.innerText = hourseLeft < 10 ? "0" + hourseLeft : hourseLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

setInterval(updateTime, 1000);
