function drawHat(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const ball = {
      radius: size * 0.1,
      x,
      get y() { return top + this.radius },
      color: color.lightest(hue)
   };

   const width = size * 0.8;
   const xRadius = width / 2;
   const yRadius = size - ball.radius * 2;

   ctx.beginPath();
   ctx.fillStyle = color.normal(hue);
   ctx.ellipse(x, bottom, xRadius, yRadius, 0, Math.PI, Math.PI * 2);
   ctx.fill();

   draw.circle(ctx, ball.x, ball.y, ball.radius, {
      fillStyle: ball.color
   });

   const sleeve = {
      width,
      height: size * 0.2,
      get y() { return bottom - this.height / 2 },
      get left() { return x - this.width / 2 },
      get right() { return x + this.width / 2 },
      color: color.lightest(hue)
   };

   draw.line(ctx, sleeve.left, sleeve.y, sleeve.right, sleeve.y, {
      strokeStyle: sleeve.color,
      lineWidth: sleeve.height,
      lineCap: "round"
   });
}