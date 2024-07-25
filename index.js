const countDownDate = new Date("July 5, 2024 15:37:25").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.clear();
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    if (distance < 0) {
        clearInterval(x);
        console.log("EXPIRED");
    }
}, 1000);
export {};
