<template>
  <section class="header">
    <div class="title-wrapper">
      <h1 class="sweet-title">
        <span data-text="Falling">Falling</span>
        <span data-text="Blocks">Blocks</span>
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

  .title-wrapper {
    display: grid;
    align-items: center;
    justify-content: center;
    transform: skew(0, -10deg);
  }

  .sweet-title {
    color: darkolivegreen;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 0.75em;
    text-align: center;
    text-shadow: 
      1px 1px 0px rgb(55, 77, 17),
      2px 2px 0px rgb(55, 77, 17),
      3px 3px 0px rgb(55, 77, 17),
      4px 4px 0px rgb(55, 77, 17),
      5px 5px 0px rgb(55, 77, 17),
      6px 6px 0px rgb(55, 77, 17),
      7px 7px 0px rgb(55, 77, 17),
      8px 8px 0px rgb(55, 77, 17);
  }

  .sweet-title span::before {
    z-index: 1;
    position: absolute;
    content: attr(data-text);
    text-shadow: 
      2px 2px 1px rgb(35, 57, 0),
      -1px -1px 1px rgb(35, 57, 0), 
      -2px 2px 1px rgb(35, 57, 0), 
      1px -1px 1px rgb(35, 57, 0);
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

  @media (max-width: 640px) {
    .sweet-title {
      font-size: 2.5rem;
    }
  }
</style>