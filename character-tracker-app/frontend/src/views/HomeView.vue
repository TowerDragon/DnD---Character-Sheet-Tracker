<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <h1 class="main-title">Character Tracker</h1>
    <div class="home-button">
      <RouterLink to="/characterCreation">New Character</RouterLink>
    </div>
    <div class="home-button">
      <RouterLink to="/characterList">Characters List</RouterLink>
    </div>
  </div>
</template>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.main-title {
  font-family: 'Cinzel', serif; /* Consider using a fantasy or medieval-style font */
  font-size: 4rem;
  margin-bottom: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.home-button {
  margin: 10px;
}

.home-button a {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.5rem;
  color: #fff;
  background-color: #4a4a8e; /* A medieval blue shade */
  border: 2px solid #d6a842; /* A gold-like color */
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s, transform 0.3s;
}

.home-button a:hover {
  background-color: #383874;
  transform: translateY(-3px);
}
</style>
