const canvas = document.getElementById("canvas");

function init() {
    const ctx = canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.moveTo(0, 0);
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.moveTo(0, 0);
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
    
    // ctx.moveTo(0, 0);
    // const grd = ctx.createLinearGradient(0, 0, 200, 0);
    // grd.addColorStop(0, "red");
    // grd.addColorStop(1, "white");
    
    // // Fill with gradient
    // ctx.fillStyle = grd;
    // ctx.fillRect(10, 10, 150, 80);

    console.log("Hi", canvas, ctx);
}

window.onload = () => init();
