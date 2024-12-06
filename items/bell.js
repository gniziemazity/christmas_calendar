function drawBell(ctx, x, y, size, hue) {
   const top = y - size / 2;
   const left = x - size / 2;
   const bottom = y + size / 2;
   const right = x + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const ring = {
      radius: size * 0.1,
      x,
      get y() { return top + this.radius },
      thickness: size * 0.05,
      color: color.darkest(hue)
   };

   draw.circle(ctx, ring.x, ring.y, ring.radius, {
      strokeStyle: ring.color,
      lineWidth: ring.thickness,
      outline: "inside"
   });

   const clapper = {
      radius: size * 0.1,
      x,
      get y() { return bottom - this.radius },
      color: color.dark(hue)
   };

   draw.circle(ctx, clapper.x, clapper.y, clapper.radius, {
      fillStyle: clapper.color
   });

   const bell = {
      top: top + ring.radius * 2,
      bottom: bottom - clapper.radius,
      controlOffset: size * 0.3
   };

   ctx.beginPath();
   ctx.fillStyle = color.normal(hue);
   ctx.moveTo(x, bell.top);
   ctx.bezierCurveTo(
      x - bell.controlOffset,
      bell.top,
      x - bell.controlOffset,
      bell.bottom,
      left,
      bell.bottom
   );
   ctx.lineTo(right, bell.bottom);
   ctx.bezierCurveTo(
      x + bell.controlOffset,
      bell.bottom,
      x + bell.controlOffset,
      bell.top,
      x,
      bell.top
   );
   ctx.fill();
}