<script setup>
  import '../aframe/life-like-automaton.js';
  import PortalTeleporter from './PortalTeleporter.vue';
  import BoxColorChanging from './BoxColorChanging.vue';


  import { useCounterStore } from '../aframe/useCounterStore';
  const { counter, increment, decrement } = useCounterStore();

  const incrementSquareApproaches = (e) => {

    
//delete boxLeft

  document.getElementById(`box-${e}`).remove();
  document.getElementById(`${e+20}`).setAttribute('visible', 'true');



    increment();
    console.log(counter.value);

    if (counter.value === 13) {
      console.log('you won');
    }
  

  };


  
</script>

<template>
  <a-box
    life-like-automaton="backSide: true;"
    position="0 102 0"
    depth="4" height="4" width="4"
  >

  
  <BoxColorChanging
      id="box-13"
      :scale="scale"
      :color="colorBoxLeft"
      position="1 -1 2"
      @click="incrementSquareApproaches();"
      @hide-box="incrementSquareApproaches(13);"
      sound="src: #sound-1; on: click;"
    />

    <PortalTeleporter
      label="Back to main room"
      material="src: #room-gol-out-texture"
      position="0 -0.5 1.9"
      rotation="0 180 0"
      :rot="0"
      :cameraEffect="true"
      :cameraY="1.65"
      :cameraRot="-180"
    />
  </a-box>

  <!-- Life Cube room navigation mesh -->
  <a-entity
    data-role="nav-mesh"
    geometry="primitive: plane; height: 3; width: 3"
    position="0 100.01 0"
    rotation="-90 0 0"
    material="color: green"
    visible="false"
  ></a-entity>

</template>