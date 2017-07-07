var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
width = 800,
height = 400,
player = {
  x : width/2,
  y : height - 5,
  width : 5,
  height : 5
};

canvas.width = width
canvas.height = height
ctx.fillStyle = "red"
ctx.fillRect(player.x, player.y, player.width, player.height)
