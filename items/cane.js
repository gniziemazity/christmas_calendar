function drawCane(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const width = size * 0.5;
   const thickness = size * 0.1;

   const arc = {
      radius : (width - thickness) / 2,
      x,
      get y() { return top + this.radius + thickness / 2 }
   };

   ctx.beginPath();
   ctx.strokeStyle = color.lightest(hue);
   ctx.lineWidth = thickness;
   ctx.arc(arc.x, arc.y, arc.radius, Math.PI, 0);
   ctx.lineTo(arc.x + arc.radius, bottom);
   ctx.stroke();
   ctx.strokeStyle = color.normal(hue);
   ctx.setLineDash([thickness, thickness]);
   ctx.stroke();
}