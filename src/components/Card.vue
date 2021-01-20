<template>
  <div class="card-container">
    <img :src="streamer.box_art_url" alt="image" class="image" />
    <div class="subtitle">
      <h4>{{ streamer.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['streamer'],
};
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 15rem;
}

.image {
  width: 100%;
}
.subtitle {
  margin: 0.6rem;
  height: 2rem;
}
</style>
