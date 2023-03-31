import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {
  ngOnInit(): void {
    const canvas = document.getElementById('canvas');

    const texts = [
      'JavaScript', 'Azure', 'AzureDevOps', 'Angular','TypeScript',
      'Java', 'Azure Logic Apps', 'NPM', 'SQL', 'React', 'NodeJS',
      'Express', 'Redux', 'SCSS', 'JSON', 'REST', 'Git',
      'Azure Function Apps', 'Azure Web Apps'
    ];
    const counts = [1,2,4,5,4,2,1];

    const options = {
      tilt: Math.PI / 9,
      initialVelocityX: 0.09,
      initialVelocityY: 0.09,
      initialRotationX: Math.PI * 0.14,
      initialRotationZ: 0
    };

    this.wordSphere(canvas, texts, counts, options);
  }

  /**
   * WordSphere
   * Written by Hyojun Kim in 2017. Licensed in MIT.
   */
  wordSphere(canvas: any, texts: any, counts: any, options: any) {
    const π = Math.PI; // happy math!
    const {
      width = 500,
      height = 500,
      radius = 200,
      fontSize = 18,
      tilt = 0,
      initialVelocityX = 0,
      initialVelocityY = 0,
      initialRotationX = 0,
      initialRotationZ = 0,
    } = options;

    let vx = initialVelocityX, vy = initialVelocityY;
    let rx = initialRotationX, rz = initialRotationZ;

    // canvas setup
    let ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';

    // Hi-DPI support
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2,2);

    // scrolling
    let clicked = false, lastX: number, lastY: number;
    canvas.addEventListener('mousedown', (event: { screenX: any; screenY: any; }) => {
      clicked = true;
      lastX = event.screenX;
      lastY = event.screenY;
    });
    canvas.addEventListener('mousemove', (event: { screenX: number; screenY: number; }) => {
      if (!clicked) return;
      const [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
      [lastX, lastY] = [event.screenX, event.screenY];

      // rotation update
      rz += -dy * 0.01;
      rx += dx * 0.01;

      // velocity update
      vx = dx * 0.1;
      vy = dy * 0.1;

      if (!looping) startLoop();
    });
    canvas.addEventListener('mouseup', (e: any) => clicked = false);
    canvas.addEventListener('mouseleave', (e: any) => clicked = false);

    function rot(x: any, y: any, t: any) {
      return [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let ix = 0, iz = 0, i = 1;
      for (const text of texts) {
        const degZ = (π/(counts.length-1)) * iz;
        const degX = (2*π/counts[iz]) * ix;

        let x = radius * Math.sin(degZ) * Math.cos(degX);
        let y = radius * Math.sin(degZ) * Math.sin(degX);
        let z = radius * Math.cos(degZ) + 8*(ix % 2) /* randomness */;

        // camera transform
        [y,z] = rot(y, z, tilt);
        [x,z] = rot(x, z, rz);
        [x,y] = rot(x, y, rx);

        // convert to cartesian and then draw.
        const alpha = 0.6 + 0.4 * (x/radius);
        const size = fontSize + 2 + 5*(x/radius);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.font = `${size}px "Helvetica Neue", sans-serif`;
        ctx.fillText(text, y + width/2, -z + height/2);

        ix--;
        if (ix < 0) {
          iz++;
          ix = counts[iz] - 1;
        }
        i++;
      }
    }

    // renderer
    let looping = false;
    function rendererLoop() {
      if (looping) window.requestAnimationFrame(rendererLoop);
      render();

      // deacceleration - dirty code xD
      if (vx > 0) vx = vx - 0.01;
      if (vy > 0) vy = vy - 0.01;
      if (vx < 0) vx = vx + 0.01;
      if (vy > 0) vy = vy + 0.01;
      if (vx == 0 && vy == 0) stopLoop();

      rz += vy * 0.01;
      rx += vx * 0.01;
    }

    function startLoop() {
      looping = true;
      window.requestAnimationFrame(rendererLoop);
    }

    function stopLoop() {
      looping = false;
    }
    startLoop();
  }
}
