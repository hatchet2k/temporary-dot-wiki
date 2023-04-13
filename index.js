// attach cursor content to browser cursor

const cursor = document.querySelector('.cursor');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX-380}px, ${mouseY-195}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)

// set portal logo svg height and width to browser dimensions

var d = document.getElementById('temporary-portal-logo');

function resize() {
    d.style.height = window.innerHeight + 'px';
    d.style.width = window.innerWidth + 'px';
  }
resize();
window.onresize = resize;

// animate portal logo svg using warp.js

const svg = document.getElementById('temporary-portal-logo')
const warp = new Warp(svg)
warp.interpolate(24)
warp.transform(([ x, y ]) => [ x, y, y ])

let offset = 1
function animate()
{
    warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 32 + offset), oy ])
    offset += 0.2
    requestAnimationFrame(animate)
}
animate()