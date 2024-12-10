function drawCandy(ctx, x, y, size, hue) {
   const top = y - size / 2;
   const left = x - size / 2;
   const bottom = y + size / 2;
   const right = x + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const ball = {
      x,
      y,
      radius: size / 4,
      get top() { return y - this.radius },
      get bottom() { return y + this.radius },
      color: color.normal(hue)
   };

   draw.circle(ctx, ball.x, ball.y, ball.radius, {
      fillStyle: ball.color
   });

   ctx.save();
   ctx.clip();

   ctx.beginPath();
   ctx.moveTo(top, left);
   ctx.lineTo(bottom, right);
   ctx.strokeStyle = color.lightest(hue);
   ctx.lineWidth = size;
   const stripeWidth = size * 0.05;
   ctx.setLineDash([stripeWidth, stripeWidth]);
   ctx.stroke();

   ctx.restore();

   ctx.beginPath();
   ctx.moveTo(x, ball.top);
   ctx.arc(x, ball.top, ball.radius, 5 * Math.PI / 4, 7 * Math.PI / 4);
   ctx.fill();

   ctx.beginPath();
   ctx.moveTo(x, ball.bottom);
   ctx.arc(x, ball.bottom, ball.radius, Math.PI / 4, 3 * Math.PI / 4);
   ctx.fill();
}