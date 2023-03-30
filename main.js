let div = document.querySelector('div')

function handleMouseDown(event) {
  event.target.style.backgroundColor=`rgba(${event.offsetX},${event.offsetY},10,10)`;
  console.log(event.target.style.backgroundColor=`rgba(${event.offsetX},${event.offsetY},10,10)`);
}
div.addEventListener('mousemove',handleMouseDown)