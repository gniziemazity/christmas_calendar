function drawSnowBall(ctx, x, y, size, hue) {
   // const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   drawNoisyBall(ctx, x, y, size, color.normal(hue));
   const offset = {
      x: x - size * 0.05,
      y: y - size * 0.1
   };
   ctx.globalCompositeOperation = "source-atop";
   drawNoisyBall(ctx, offset.x, offset.y, size, color.lightest(hue));
   ctx.globalCompositeOperation = "source-over";

   function drawNoisyBall(ctx, x, y, size, color) {
      const maxRadius = size * 0.5;
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 60) {
         const radius = maxRadius * (1 - Math.random() * 0.05);
         const surfaceX = x + radius * Math.cos(a);
         const surfaceY = y - radius * Math.sin(a);
         ctx.lineTo(surfaceX, surfaceY);
      }
      ctx.fillStyle = color;
      ctx.fill();
   }
}