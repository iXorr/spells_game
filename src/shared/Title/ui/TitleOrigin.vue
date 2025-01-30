<template>
  <div class="root">
    <p>TITLE EXAMPLE</p>

    <div class="lightning">
      <div class="noisy">spell</div>
      <div class="noisy">game</div>
    </div>
  </div>
</template>

<style scoped>
  .root {
    --size: 3;
    --skew: 7;
    --orange: hsl(20, 100%, 71%);
    --svgfilter: url(#squiggly-0);
    --boxshadow: rgb(56, 51, 46);
    --textshadow: rgb(42, 22, 23);
  }

  @media only screen and (max-width: 720px) {
    .root {
      --size: 2;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .root {
      --size: 1.4;
    }
  }
</style>

<style scoped>
  .lightning {
    display: flex;
    position: relative;
    margin: 4vmin;
    filter: var(--svgfilter);
  }

  .lightning > * {
    background: #f4e205;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding-top: var(--large-indent);
    padding-left: var(--large-indent);
    padding-right: var(--large-indent);
    padding-bottom: var(--large-indent);

    transform: skew(calc(var(--skew) * -1deg), calc(var(--skew) * -1deg));
    font-size: var(--header-font-size);
    font-weight: 700;
    color: Crimson;

    text-transform: uppercase;
    text-align: right;
    border: 3px solid var(--boxshadow);
    /* border-left: 0; */
    text-shadow: var(--textshadow) 0px 0px 0px,
      var(--textshadow) 0.669131px 0.743145px 0px,
      var(--textshadow) 1.33826px 1.48629px 0px,
      var(--textshadow) 2.00739px 2.22943px 0px,
      var(--textshadow) 2.67652px 2.97258px 0px,
      var(--textshadow) 3.34565px 3.71572px 0px,
      var(--textshadow) 4.01478px 4.45887px 0px,
      var(--textshadow) 4.68391px 5.20201px 0px;
  }

  .lightning > *:last-child {
    left: calc(var(--normal-indent)*-1);
    position: relative;
    text-align: left;
  }

  .lightning > *:last-child span {
    border-top: 1px solid;
  } 

  .orange {
    background-color: var(--orange);
  }

  .noisy {
    background-image: var(--noise-image);
  }
</style>