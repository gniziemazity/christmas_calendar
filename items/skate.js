function drawSkate(ctx, x, y, size, hue) {
   // const top = y - size / 2;
   // const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);

   const sledge = {
      x,
      bottom: y + size * 0.35,
      size: size * 0.9
   };
   drawSledge(ctx, sledge.x, sledge.bottom, sledge.size, hue);

   const sock = {
      x: x - size * 0.25,
      y: y + size * 0.05,
      size: size * 1.1
   };
   drawSock(ctx, sock.x, sock.y, sock.size, color.reverse(hue), 0);
}