// var e = window.event;

// var posX = e.screenX;
// var posY = e.screenY;

// document.Form1.posx.value = posX;
// document.Form1.posy.value = posY;

// var t = setTimeout(mouse_position,100);

var d = document.getElementById('temp-type');

function resize() {
    d.style.height = window.innerHeight - 20 + 'px';
    d.style.width = window.innerWidth - 20 + 'px';
  }
resize();
window.onresize = resize;

const svg = document.getElementById('temp-type')
const warp = new Warp(svg)
warp.interpolate(64)
warp.transform(([ x, y ]) => [ x, y, y ])

let offset = 0
function animate()
{
    warp.transform(([ x, y, oy ]) => [ x, oy + 16 * Math.sin(x / 32 + offset), oy ])
    offset += 0.1
    requestAnimationFrame(animate)
}
animate()