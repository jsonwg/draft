<script>
  import Timer from './worker?worker';
  import Container from './Container.svelte';

  let w;
  let h;
  $: radius = w > h ? h * 0.35 : w * 0.35;
  $: circumference = Math.floor(2 * Math.PI * radius);

  let timeLeft = 150;
  let clicked = false;
  let worker;

  const timer = () => {
    clicked = !clicked;

    if (worker) {
      worker.terminate();
    }

    if (clicked) {
      worker = new Timer();
      worker.onmessage = (e) => {
        timeLeft = e.data;

        if (!timeLeft) {
          clicked = !clicked;
          return worker.terminate();
        }

        worker.postMessage(timeLeft);
      };

      worker.postMessage(timeLeft);
    }
  };

  const calcString = (timeLeft) => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return `${min}:${sec > 9 ? sec : '0' + sec}`;
  };
</script>

<Container>
  <div bind:clientWidth={w} bind:clientHeight={h}>
    <svg>
      <linearGradient id="timer" x1="0" y1="0" x2="1" y2="1">
        <stop offset="25%" stop-color="var(--red1)" />
        <stop offset="65%" stop-color="var(--orange)" />
        <stop offset="100%" stop-color="var(--red2)" />
      </linearGradient>
      <radialGradient id="text">
        <stop offset="30%" stop-color="var(--red1)" />
        <stop offset="95%" stop-color="var(--orange)" />
      </radialGradient>
      <circle r={radius} cx="50%" cy="50%" />
      <path
        stroke-dasharray={`${(circumference * timeLeft) / 150}, ${circumference}`}
        d="
          M {w / 2}, {h / 2}
          m {-radius}, 0
          a {radius},{radius} 0 1,0 {radius * 2},0
          a {radius},{radius} 0 1,0 {-radius * 2},0
        "
        transform="scale(-1, 1) translate({-w}, 0) rotate(90, {w / 2}, {h / 2}) "
      />
      <text on:click={timer} dominant-baseline="middle" x="50%" y="50%">
        <tspan font-size={w > h ? h / 18 : w / 18} x={w / 2} dy={-radius / 3}>Time Remaining</tspan>
        <tspan font-size={w > h ? h / 7 : w / 7} x={w / 2} dy={radius / 2.5}
          >{calcString(timeLeft)}
        </tspan>
      </text>
    </svg>
  </div>
</Container>

<style>
  div,
  svg {
    height: 100%;
    width: 100%;
  }

  path {
    fill: none;
    stroke: url(#timer);
    stroke-width: 10;
    stroke-linecap: round;
    transition: 1s linear stroke-dasharray;
  }

  circle {
    fill: none;
    stroke-width: 10;
    stroke: rgba(0, 0, 0, 0.3);
    filter: drop-shadow(8px 7px 5px black);
  }

  text {
    text-anchor: middle;
    fill: url(#text);
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
  }
</style>
