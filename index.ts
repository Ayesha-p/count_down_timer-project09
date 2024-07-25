
const countDownDate: number = new Date("July 5, 2024 15:37:25").getTime();
const x: NodeJS.Timeout = setInterval(() => {
    const now: number = new Date().getTime();
    const distance: number = countDownDate - now;
    const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    console.clear();
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    if (distance < 0) {
        clearInterval(x);
        console.log("EXPIRED");
    }
}, 1000);
