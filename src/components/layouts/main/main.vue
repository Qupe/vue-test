<template>
  <div class="main">
    <card v-for="(photo, index) in photos" :key="index" :photo="photo"></card>
  </div>
</template>

<script src="./main.js"></script>

<style>
  .main {
    max-width: 960px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    column-width: 285px;
    column-gap: 30px;
  }
</style>
