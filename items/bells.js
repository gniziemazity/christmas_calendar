function drawBells(ctx, x, y, size, hue) {
   // const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   const bell = {
      size: size / 2,
      y: y + size * 0.15,
      xOffset: size * 0.2,
      rotation: Math.PI / 6
   };

   ctx.save();

   ctx.translate(x, bell.y);
   ctx.rotate(bell.rotation);
   drawBell(ctx, -bell.xOffset, 0, bell.size, hue);
   ctx.rotate(-2 * bell.rotation);
   drawBell(ctx, +bell.xOffset, 0, bell.size, hue);

   ctx.restore();

   const bow = {
      size: size * 0.7,
      y: y - size * 0.15
   };
   drawBow(ctx, x, bow.y, bow.size, color.reverse(hue));
}