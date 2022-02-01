const expectedTime = document.querySelector('.expected-time-text');
const days = document.querySelector('.days');
const hourse = document.querySelector('.hourse');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const generateBtn = document.querySelector('#generate');
const settingBtn = document.querySelector('#settings');
const datePicker = document.querySelector('#datePicker');

let interval = 0;

function updateTime(dateEntered) {
    const currentTime = new Date();
    const distanceTime = dateEntered - currentTime;

    const daysLeft = Math.floor(distanceTime / 1000 / 60 / 60 / 24);
    const hourseLeft = Math.floor(distanceTime / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(distanceTime / 1000 / 60) % 60;
    const secondsLeft = Math.floor(distanceTime / 1000) % 60;

    days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hourse.innerText = hourseLeft < 10 ? "0" + hourseLeft : hourseLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
    if (distanceTime < 0) {
        clearInterval(interval);
    }
}

function setResetInterval(running) {
    if (running) {
        const dateEntered = new Date(`${datePicker.value} 00:00:00`);
        const textDate = `${dateEntered.getDate() < 10 ? '0' : ''}${dateEntered.getDate()}.${dateEntered.getMonth() < 10 ? '0' : ''}${dateEntered.getMonth() + 1}.${dateEntered.getFullYear()}`;
        expectedTime.innerText = textDate;
        interval = setInterval(updateTime, 1000, dateEntered);
    } else {
        clearInterval(interval);
    }
}

settingBtn.addEventListener('click', function () {
    setResetInterval(false);
});

generateBtn.addEventListener('click', function () {
    setResetInterval(true);
});