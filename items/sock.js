function drawSock(ctx, x, y, size, hue, angle = Math.PI / 4 ) {
   const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   const footWidth = size * 0.4;
   const radius = footWidth / 2;
   const ankleY = y + size * 0.1;
   const sleeveWidth = footWidth * 1.1;
   const footSize = size * 0.3;

   const tipX = x + Math.cos(angle) * footSize;
   const tipY = ankleY + Math.sin(angle) * footSize;

   draw.line(ctx, x, top + radius, x, ankleY, {
      strokeStyle: color.normal(hue),
      lineWidth: footWidth,
      lineCap: "round"
   });

   draw.line(ctx, x, ankleY, tipX, tipY, {
      strokeStyle: color.normal(hue),
      lineWidth: footWidth,
      lineCap: "round"
   });

   draw.line(ctx, x, top, x, top + radius, {
      strokeStyle: color.lightest(hue),
      lineWidth: sleeveWidth,
      lineCap: "butt"
   });
}