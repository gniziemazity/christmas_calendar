function drawCrown(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   const thickness = size * 0.2;
   const radius = size * 0.5;

   draw.circle(ctx, x, y, radius, {
      strokeStyle: color.light(hue),
      lineWidth: thickness,
      outline: "inside"
   });

   const length = Math.PI * 2 * radius;
   const dashLength = length / 40;
   ctx.setLineDash([dashLength, dashLength]);

   draw.circle(ctx, x, y, radius, {
      strokeStyle: color.dark(hue),
      lineWidth: thickness,
      outline: "inside"
   });

   ctx.setLineDash([]);

   const bow = {
      x,
      y: top + thickness,
      size: radius
   };
   drawBow(ctx, bow.x, bow.y, bow.size, color.reverse(hue));
}