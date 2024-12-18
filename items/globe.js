function drawGlobe(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const ball = {
      radius: size * 0.45,
      x,
      get y() { return top + this.radius },
      color: "rgba(255, 255, 255, 0.3)"
   };

   // snow
   ctx.fillStyle = "white";
   ctx.beginPath();
   ctx.arc(ball.x, ball.y, ball.radius, 0.3, Math.PI - 0.5);
   ctx.fill();

   const tree = {
      size: ball.radius * 1.2,
      x,
      y: ball.y,
      hue: color.reverse(hue)
   };
   drawTree(ctx, tree.x, tree.y, tree.size, tree.hue);

   draw.circle(ctx, ball.x, ball.y, ball.radius, {
      fillStyle: ball.color
   });

   const base = {
      height: size * 0.15,
      width: size * 0.6,
      get y() { return bottom - this.height / 2 },
      get left() { return x - this.width / 2 },
      get right() { return x + this.width / 2 },
      color: color.dark(hue)
   };

   draw.line(ctx, base.left, base.y, base.right, base.y, {
      strokeStyle: base.color,
      lineWidth: base.height,
      lineCap: "round"
   });
}