function drawGlove(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const palmWidth = size / 2;
   const radius = palmWidth / 2;
   const thumbWidth = palmWidth / 2;
   const sleeveWidth = palmWidth * 1.1;

   draw.line(ctx, x, top + radius, x, bottom - radius, {
      lineWidth: palmWidth,
      lineCap: "round",
      strokeStyle: color.normal(hue)
   });

   draw.line(ctx, x, top + radius, x - radius, y, {
      lineWidth: thumbWidth,
      lineCap: "round",
      strokeStyle: color.normal(hue)
   });

   draw.line(ctx, x, top, x, top + radius, {
      lineWidth: sleeveWidth,
      lineCap: "butt",
      strokeStyle: color.lightest(hue)
   });
}