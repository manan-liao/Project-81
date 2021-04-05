function circle()
{
ctx.beginPath();
color = blue;
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 270 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
color = black;
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(280, 270 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
color = red;
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(310, 270 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
color = yellow;
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(265, 240 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
color = green;
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(295, 240 ,0 , 2*Math.PI);
ctx.stroke();
}