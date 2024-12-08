function drawCandle(ctx, x, y, size, hue) {
   // const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const stick = {
      width: size * 0.3,
      height: size * 0.7,
      x,
      get bottom() { return bottom - this.yRadius },
      get top() { return this.bottom - this.height + this.yRadius},
      get xRadius() { return this.width / 2 },
      get yRadius() { return this.xRadius / 2 },
      color: color.dark(hue),
      lightColor: color.lightest(hue)
   };

   draw.line(ctx, x, stick.top, x, stick.bottom, {
      strokeStyle: stick.color,
      lineWidth: stick.width
   });

   draw.ellipse(ctx, stick.x, stick.bottom, stick.xRadius, stick.yRadius, {
      fillStyle: stick.color
   });
   draw.ellipse(ctx, stick.x, stick.top, stick.xRadius, stick.yRadius, {
      fillStyle: stick.lightColor
   });

   const flame = {
      width: stick.width * 0.3,
      height: size - stick.height,
      x,
      get xRadius() { return this.width / 2 },
      get yRadius() { return this.height / 2 },
      get y() { return stick.top - this.yRadius },
      color: "yellow"
   };

   draw.ellipse(ctx, flame.x, flame.y, flame.xRadius, flame.yRadius, {
      fillStyle: flame.color
   });
}