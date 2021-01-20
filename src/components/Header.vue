<template>
  <div class="header">
    <h1>Top 10 Live Twitch Channels</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
h1 {
  font-size: 4rem;
}
@media only screen and (max-width: 1100px) {
  .header {
    font-size: 0.5rem;
  }
  h1 {
    font-size: 1.2rem;
  }
}
</style>
