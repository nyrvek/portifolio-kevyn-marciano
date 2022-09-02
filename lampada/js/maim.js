const lamp = document.getElementById("lamp");

function on(event) {
  if (event.type === "touchstart") event.prevent.Default();
  const lampada = document.getElementById("lampadaFundo");
  lampada.classList.toggle("active");
}
lamp.addEventListener("click", on);
lamp.addEventListener("touchstart", on);