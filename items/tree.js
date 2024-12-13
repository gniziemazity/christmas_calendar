function drawTree(ctx, x, y, size, hue) {
   const top = y - size / 2;
   // const left = x - size / 2;
   const bottom = y + size / 2;
   // ctx.strokeRect(top, left, size, size);

   const trunkWidth = size * 0.1;

   ctx.lineWidth = trunkWidth;
   ctx.strokeStyle = color.darkest(hue);
   draw.line(ctx, x, bottom, x, y);

   const block = {
      bottom: bottom - size * 0.2,
      top: bottom - size * 0.5,
      width: size * 0.8,
      get left() { return x - this.width / 2 },
      get right() { return x + this.width / 2 },
      color: color.normal(hue)
   };

   ctx.fillStyle = block.color;

   // base
   ctx.beginPath();
   ctx.moveTo(block.left, block.bottom);
   ctx.lineTo(block.right, block.bottom);
   ctx.lineTo(x, block.top);
   ctx.fill();

   // middle
   block.bottom = bottom - size * 0.4;
   block.top = block.bottom - size * 0.3;
   block.width = size * 0.6;
   ctx.beginPath();
   ctx.moveTo(block.left, block.bottom);
   ctx.lineTo(block.right, block.bottom);
   ctx.lineTo(x, block.top);
   ctx.fill();

   // top
   block.bottom = bottom - size * 0.6;
   block.top = top;
   block.width = size * 0.4;
   ctx.beginPath();
   ctx.moveTo(block.left, block.bottom);
   ctx.lineTo(block.right, block.bottom);
   ctx.lineTo(x, block.top);
   ctx.fill();
}