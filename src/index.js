import Wad from 'web-audio-daw';
import Pizzicato from 'pizzicato';

const v1 = [
  '/sounds/facebook.m4a',
  '/sounds/whatsapp.m4a',
  '/sounds/snapchat.m4a',
  '/sounds/skype.m4a',
  '/sounds/windows.m4a',
  '/sounds/whatsapp2.m4a',
];

const v2 = [
  '/sounds/boom.wav',
  '/sounds/clap.wav',
  '/sounds/hihat.wav',
  '/sounds/loop.wav',
  '/sounds/snare.wav',
  '/sounds/ride.wav',
];

const v3 = [
  '/sounds/scratch.wav',
  '/sounds/clap.wav',
  '/sounds/scream2.wav',
  '/sounds/scream.wav',
  '/sounds/snare.wav',
  '/sounds/dj.wav',
];

const sounds = v3;

function right() {
  const right = new Wad({source : sounds[0]});
  right.play();
}

function left() {
  const left = new Wad({source : sounds[1]});
  left.play();
}

function one() {
  const one = new Wad({source : sounds[2]});
  one.play();
}

function two() {
  const two = new Wad({source : sounds[3]});
  two.play();
}

function three() {
  const three = new Wad({source : sounds[4]});
  three.play();
}

function four() {
  const four = new Wad({source : sounds[5]});
  four.play();
}

function start(e) {
  console.log(e.keyCode);
  const keyCode = e.keyCode;
  // w
  if (keyCode === 87) {
    right();
  }
  // a
  if (keyCode === 65) {
    left();
  }
  // s
  if (keyCode === 83) {
    one();
  }
  // d
  if (keyCode === 68) {
    two();
  }
  // f
  if (keyCode === 70) {
    three();
  }
  // g
  if (keyCode === 71) {
    four();
  }
}

window.addEventListener("keydown", start);

// const loop = new Wad({
//   source : '/sounds/loop.wav',
//   loop   : false,
// });

// console.log(loop);



const loop = new Pizzicato.Sound({
  source: 'file',
  options: {
    path: '/sounds/loop.wav',
    loop: true
  }
}, function() {
    loop.play();
});


