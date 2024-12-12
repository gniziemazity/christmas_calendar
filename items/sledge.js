function drawSledge(ctx, x, y, size, hue) {
   // const top = y - size / 2;
   const left = x - size / 2;
   const right = x + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const height = size * 0.25;

   const base = {
      thickness: size * 0.1,
      bottom: y + height / 2
   };

   const arc = {
      radius: height * 0.4,
      get x() { return right - this.radius - base.thickness / 2 },
      get y() { return base.bottom - this.radius }
   };

   ctx.beginPath();
   ctx.strokeStyle = color.normal(hue);
   ctx.lineWidth = base.thickness;
   ctx.arc(arc.x, arc.y, arc.radius, -Math.PI / 2, Math.PI / 2);
   ctx.lineTo(left, base.bottom);
   ctx.stroke();

   const leg = {
      bottom: base.bottom,
      top: base.bottom - height,
      thickness: base.thickness * 0.5
   };
   const leftLeg = {
      ...leg,
      x: left + size * 0.2
   };
   const rightLeg = {
      ...leg,
      x: left + size * 0.6
   };

   ctx.lineWidth = leg.thickness;
   ctx.strokeStyle = color.light(hue);

   draw.line(ctx, leftLeg.x, leftLeg.bottom, leftLeg.x, leftLeg.top);
   draw.line(ctx, rightLeg.x, rightLeg.bottom, rightLeg.x, rightLeg.top);

   const bench = {
      y: leg.top,
      left,
      right: rightLeg.x + size * 0.2
   };

   draw.line(ctx, bench.left, bench.y, bench.right, bench.y);
}