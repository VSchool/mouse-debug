var mouse = {x: 0, y: 0};

document.addEventListener("mousemove", (event)=>{

  event.y > 300 ? mouse.y = 300: mouse.y = event.y;
  event.y < 100 ? mouse.y = 100: mouse.y = event.y;

  event.x > 300 ? mouse.x = 300: mouse.x = event.x;
  event.x < 100 ? mouse.x = 100: mouse.x = event.x;

  document.getElementById("number").innerHTML = "x: " + mouse.x + "<br>y: " + mouse.y

});
