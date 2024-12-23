function drawSnowFlake(ctx, x, y, size, hue, pattern = [1, 1, 1, 1, 1, 1]) {
   // const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   ctx.lineWidth = size * 0.05;
   ctx.strokeStyle = color.normal(hue);

   ctx.save();
   ctx.translate(x, y);
   for (let i = 0; i < 6; i++) {
      pattern[i] == 1 && drawBranch(ctx, 0, 0, size);
      ctx.rotate(Math.PI / 3);
   }
   ctx.restore();

   function drawBranch(ctx, x, y, size) {
      draw.line(ctx, x, y, x + size * 0.5, y);
      draw.line(ctx, x + size * 0.25, y, x + size * 0.4, y + size * 0.15);
      draw.line(ctx, x + size * 0.25, y, x + size * 0.4, y - size * 0.15);
   }
}