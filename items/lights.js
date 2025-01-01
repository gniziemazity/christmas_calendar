/* By Francisco Dorsman */
function drawLights(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;
    //ctx.strokeRect(top, left, size, size);

    const numberOfLights = 3;

    const bulb = {
        position: 0,
        width: size / numberOfLights,
        y_radius: (size / numberOfLights) * 0.9 / 2,
        get x_radius() {return this.y_radius / 3},
        get x() { return left + (this.width / 2) + this.position * this.width},
        get y() { return top + this.y_radius + (size / numberOfLights) * 0.1 },
        get left() {return left + this.width * this.position},
        get right() {return this.left + this.width},
        color: color.normal(hue),
        glow: color.lightest(hue)
    }

    const thread = {
        size: bulb.x_radius,
        bottom: bulb.x_radius * 1.5,
        get x(){return bulb.x},
        y: bulb.y - bulb.y_radius,
        get left() {return this.x - this.size /2},
        top,
        color: color.darkest(hue),
    }

    const cord = {
        get x() { return thread.x},
        y: top + thread.bottom,
        color: color.darkest(hue),
    }


    for (let index = 0;index < numberOfLights; index++){
        bulb.position = index;
        bulb.color = color.normal (hue + (360 / numberOfLights)* index)
        drawThread();
        drawCords();
        drawBulb();
    }

    function drawThread() {
        ctx.fillStyle = thread.color;
        ctx.fillRect(thread.left,thread.top,thread.size,thread.bottom);
    }

    function drawCords(){
        ctx.strokeStyle = thread.color;
        ctx.beginPath()
        ctx.moveTo(bulb.left,cord.y)
        ctx.bezierCurveTo(
            thread.x-bulb.width / 2, cord.y, 
            thread.x, cord.y, 
            thread.x, top
        );
        ctx.bezierCurveTo(
            thread.x, cord.y, 
            thread.x + bulb.width /2, cord.y, 
            bulb.right, cord.y
        );
        ctx.stroke()
    }

    function drawBulb(){
        draw.ellipse(ctx,bulb.x, bulb.y, bulb.x_radius, bulb.y_radius,{
            fillStyle: bulb.color,
            shadowColor: bulb.glow,
            shadowBlur: bulb.x_radius * 0.7,
            shadowOffsetX: 0,
            shadowOffsetY: 0
        });
    }
}