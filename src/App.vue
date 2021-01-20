<template>
  <div id="app">
    <Header />
    <div :class="isLoading ? 'search-wrapper-unclick' : 'search-wrapper'">
      <input
        type="text"
        v-model="search"
        placeholder="Search title.."
        class="input"
      />
    </div>
    <div class="wrapper">
      <h2 v-if="error">error status {{ error }}</h2>
      <Spinner v-if="isLoading" />
      <div class="grid-wrapper" v-if="!isLoading">
        <div v-bind:key="streamer.id" v-for="streamer in filteredList">
          <Card v-bind:streamer="streamer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from './components/Card';
import Spinner from './components/Spinner';
import Header from './components/Header';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Card,
    Spinner,
    Header,
  },
  data() {
    return {
      search: '',
      streamers: [],
      isLoading: true,
      error: false,
    };
  },
  created() {
    axios.get('http://localhost:8081/').then((response) => {
      if (response.data.length > 1) {
        this.streamers = response.data;
        this.isLoading = false;
      } else {
        this.error = response.status;
        this.isLoading = false;
      }
    });
  },
  computed: {
    filteredList() {
      return this.streamers.filter((stream) => {
        return stream.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial;
}

.wrapper {
  height: 80vh;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5rem;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 50px 50px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.search-wrapper-unclick {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
  pointer-events: none;
}

.search-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
}

.input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  width: 15rem;
}

@media only screen and (max-width: 1100px) {
  .grid-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>
