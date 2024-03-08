<script setup>
  import '../aframe/emit-when-near.js';
  import '../aframe/event-set.js';
  import '../aframe/clickable.js';

  import { ref } from 'vue';

  defineProps({
    scale: Number,
    color: String,
  });

  //variable globale x = 0




 
</script>

<template>

<a-entity
  gltf-model="#mine"
  scale="0.003 0.003 0.003"
  clickable
  emit-when-near="event: hide-box; eventFar: show-box; distance: 2;"
  event-set__near="event: hide-box; attribute: visible; value: true;"
  sound="src: #sound-1; on: hide-box;"

></a-entity>

<!--    rendre visible event-set__far="event: show-box; attribute: visible; value: true;"
 -->

</template>