window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //   Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // Variables
    let painting = false;
    let penColor = '#000';
    let penThikness = 10;
    // Functions
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penThikness;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Event Listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);

    // Change The Color Of The Pen
    colorInput = document.querySelector(".color-input");
    colorInput.addEventListener("input", changePenColor);
    function changePenColor(e) {
        penColor = e.target.value;
    }
    // Change The Thikness Of The Pen
    penThiknessInput = document.querySelector(".pen-thickness-input");
    penThiknessInput.addEventListener("input", changePenThikness);
    function changePenThikness(e) {
        penThikness = e.target.value;
        // console.log(e.target.value);
    }
});