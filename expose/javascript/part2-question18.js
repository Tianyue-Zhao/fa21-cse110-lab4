function printTime(d)
{
    let time = d.toLocaleTimeString();
    console.log(time);
}

let d = new Date();
setInterval(printTime, 1000, d);