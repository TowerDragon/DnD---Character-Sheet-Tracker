<template>
  <div class="right-side">
    <div class="title">
      <RouterLink to="/" class="exit-button-container"><img class="exit-button"src="../assets/right_17151144.png"></img></RouterLink>
      <h1>Characters List</h1>
    </div>
    <h2>CHARACTERS YOU'VE ALREADY MADE</h2>
    <button class="character-button">Example character 1</button>
    <button class="character-button">Example character 2</button>
    <button class="character-button">Example character 3</button>
  </div>
</template>

<script setup>
  import ExitButton from '../components/ExitButton.vue'
  import { RouterLink } from 'vue-router'
</script>


<style scoped>
.exit-button-container{
  position: absolute;
  left: 0;
  height: 3rem;
  top: 0;
}

.title {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;

}

.exit-button{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: absolute;
  height: 100%
}

.right-side {
  width: 50%;
  background-color: #a24f29; /* A warm, brownish color matching the image's tone */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  float: right;
  height: 100%
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.character-button {
  background-color: #81502b; /* Darker brown for the buttons */
  padding: 15px 30px;
  border-radius: 15px;
  margin: 10px 0;
  width: 80%;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
}

.character-button:hover {
  background-color: #6b3f22;
  transform: translateY(-3px);
}
</style>
