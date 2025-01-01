/* By Francisco Dorsman */
function drawGingerBread(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;
    const bottom = y + size / 2;
    const right = x + size / 2;
    //ctx.strokeRect(top, left, size, size);

    const legWidth = size * 0.23;
    const legAngle = Math.PI / 6

    const armWidth = size * 0.2;
    const armAngle = 0;
    const armLength = 1.5;

    const head = {
        radius: size * 0.22,
        x,
        get y() { return top + this.radius },
        color: color.dark(hue)
    };

    const decoration = {
        size: size * 0.025,
        color: color.light(hue)
     }

    draw.circle(ctx, head.x, head.y, head.radius, {
        fillStyle: head.color
    });

    const body = {
        x,
        y: top + head.radius * 1.75
    }

    const leg = {
        x,
        y: body.y,
        offsetX: Math.cos(legAngle) * legWidth,
        footY: bottom - legWidth/2,
        color: color.dark(hue)
    }

    draw.line(ctx, leg.x, leg.y, leg.x + leg.offsetX, leg.footY, {
        strokeStyle: leg.color,
        lineWidth: legWidth,
        lineCap: "round"
    });

    draw.line(ctx, leg.x, leg.y, leg.x - leg.offsetX, leg.footY, {
        strokeStyle: leg.color,
        lineWidth: legWidth,
        lineCap: "round"
    });

    const arm = {
        x,
        y: body.y + 0.3 * head.radius,
        offsetX: Math.cos(armAngle) * armWidth * armLength,
        offsetY: Math.sin(armAngle) * armWidth * armLength,
        color: color.dark(hue)
    }

    draw.line(ctx, arm.x - armWidth /2 , arm.y, arm.x - arm.offsetX, arm.y + arm.offsetY, {
        strokeStyle: arm.color,
        lineWidth: armWidth,
        lineCap: "round"
    });

    draw.line(ctx, arm.x + armWidth /2 , arm.y, arm.x + arm.offsetX, arm.y + arm.offsetY, {
        strokeStyle: arm.color,
        lineWidth: armWidth,
        lineCap: "round"
    });
    drawBow(ctx, body.x, body.y, size * 0.20, hue-180);

    const eye = {
        x,
        y: top+head.radius / 1.5,
        offsetX: head.radius / 2.5,
        radius: decoration.size,
        color: decoration.color
    }

    draw.circle(ctx, eye.x - eye.offsetX, eye.y, eye.radius, {
        fillStyle: eye.color
    });
    draw.circle(ctx, eye.x + eye.offsetX, eye.y, eye.radius, {
        fillStyle: eye.color
    });


    const mouth = {
        radius : head.radius / 2.5,
        x,
        y: top +  head.radius ,
        thickness: decoration.size,
        color: decoration.color
     };
 
    ctx.beginPath();
    ctx.strokeStyle = mouth.color;
    ctx.lineWidth = mouth.thickness;
    ctx.arc(mouth.x, mouth.y, mouth.radius, Math.PI/8, 7*Math.PI/8);
    ctx.stroke();
 


    draw.circle(ctx, x, y-decoration.size, decoration.size, {
        fillStyle: decoration.color
    });    

    draw.circle(ctx, x, y + decoration.size * 2, decoration.size, {
        fillStyle: decoration.color
    });    

    draw.circle(ctx, x, y + decoration.size * 5, decoration.size, {
        fillStyle: decoration.color
    });    

}