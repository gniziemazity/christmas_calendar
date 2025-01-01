/* By Francisco Dorsman */
function drawSanta(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;
    // ctx.strokeRect(top, left, size, size);

    const beard = {
        x,
        y: y+size / 8,
        xRadius: size * 0.2,
        yRadius: size * 0.35, 
        color: "white"
    }

    draw.ellipse(ctx, beard.x, beard.y, beard.xRadius, beard.yRadius, {
        fillStyle: "white"
    });
    const face = {
        x,
        y: beard.y - size * 0.05,
        radius: size * 0.2,
        color: "pink"
    }

    draw.circle(ctx, face.x, face.y, face.radius , {
        fillStyle: face.color
    })


    const mustache = {
        y: face.y + size * 0.05,
        offset: size * 0.075,
        xRadius: size * 0.1,
        yRadius: size * 0.04, 
        angle: Math.PI / 8,
        color: beard.color
    }

    ctx.save()
    ctx.translate(x,mustache.y);
    ctx.rotate(-mustache.angle);
    draw.ellipse(ctx, -mustache.offset, 0, mustache.xRadius, mustache.yRadius, {
        fillStyle: mustache.color
    });
    ctx.rotate(2 * mustache.angle);
    draw.ellipse(ctx, +mustache.offset, 0, mustache.xRadius, mustache.yRadius, {
        fillStyle: mustache.color
    });
    ctx.restore()


    const eye = {
        offset: size * 0.075,
        y: face.y - size * 0.025,
        radius: size * 0.025,
        color: color.darkest(hue)
    }

    draw.circle(ctx, x - eye.offset, eye.y, eye.radius , {
        fillStyle: eye.color
    })
    draw.circle(ctx, x + eye.offset, eye.y, eye.radius , {
        fillStyle: eye.color
    })

    const hat = {
        x: face.x + face.radius,
        y: face.y - size / 6,
        radius: face.radius *2,
        color: "red"
    }

    ctx.beginPath();
    ctx.fillStyle = hat.color;
    ctx.moveTo(hat.x, hat.y);

    ctx.arc(hat.x, hat.y, hat.radius, Math.PI, Math.PI * 1.5)
    ctx.fill();
    draw.circle(ctx,hat.x, top + size/10,size / 10,{
        fillStyle: "white"

    })

    const rim = {
        x,
        y: hat.y,
        radius: face.radius,
        height: size * 0.1,
        color: "white"
    }

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle= rim.color;
    ctx.lineWidth = rim.height;
    ctx.lineCap= "round"
    ctx.moveTo(rim.x - rim.radius, rim.y)
    ctx.bezierCurveTo(rim.x - rim.radius, rim.y - rim.height/2, rim.x + rim.radius, rim.y - rim.height/2, rim.x + rim.radius, rim.y)
    ctx.stroke();

    ctx.restore();
}