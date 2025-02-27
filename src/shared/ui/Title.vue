<template>
  <section class="header">
    <div class="title-wrapper">
      <h1 class="sweet-title">
        <span data-text="Cave">Cave</span>
        <span data-text="Game">Game</span>
      </h1>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@300;700;900&display=swap");

.header {
  top: 50%;
  left: 50%;
  translate: -50% -100%;

  position: absolute;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header::after {
  left: -.5rem;
  position: absolute;
  content: '';
  width: 115%;
  height: 100%;
  z-index: -1;
  transform: skew(0, -10deg);
  box-shadow: 0 0 10px #000;

  background: linear-gradient(180deg, rgba(240, 230, 140, 0.5), rgba(189, 183, 107, 0.5), rgba(244, 164, 96, 0.5));
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

.title-wrapper {
  display: grid;
  align-items: center;
  justify-content: center;
  transform: skew(0, -10deg);
}

.sweet-title {
  color: #d1c28d; /* светлый оттенок желтого/золота */
  font-weight: 900;
  text-transform: uppercase;
  font-size: 5rem;
  line-height: 0.75em;
  text-align: center;
  text-shadow:
      1px 1px 0px rgb(140, 103, 40),
      2px 2px 0px rgb(140, 103, 40),
      3px 3px 0px rgb(140, 103, 40),
      4px 4px 0px rgb(140, 103, 40),
      5px 5px 0px rgb(140, 103, 40),
      6px 6px 0px rgb(140, 103, 40),
      7px 7px 0px rgb(140, 103, 40),
      8px 8px 0px rgb(140, 103, 40);
}

.sweet-title span::before {
  z-index: 1;
  position: absolute;
  content: attr(data-text);
  text-shadow:
      2px 2px 1px rgb(101, 63, 26),
      -1px -1px 1px rgb(101, 63, 26),
      -2px 2px 1px rgb(101, 63, 26),
      1px -1px 1px rgb(101, 63, 26);
}

.sweet-title span {
  display: block;
  position: relative;
}

.sweet-title span:nth-child(1) {
  padding-right: 2.25rem;
}

.sweet-title span:nth-child(2) {
  padding-top: .25rem;
  padding-left: 2.25rem;
}

@media (max-width: 1280px) {
  .sweet-title {
    font-size: 4rem;
  }

  .header {
    translate: -50% -50%;
  }
}

@keyframes gradient {
  0% {

    background-position: 50% 0%;

  }

  50% {

    background-position: 50% 100%;

  }

  100% {

    background-position: 50% 0%;

  }
}

@media (max-width: 640px) {
  .sweet-title {
    font-size: 2.5rem;
  }
}
</style>
