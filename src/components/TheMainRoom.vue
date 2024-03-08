  <script setup>
  import { ref, onMounted } from 'vue';
    import BoxColorChanging from './BoxColorChanging.vue';
    import Grenade from "./Grenade.vue";

    import PortalTeleporter from './PortalTeleporter.vue';
    import ExitDoor from "./ExitDoor.vue";

    import { useCounterStore } from '../aframe/useCounterStore';
    const { counter, increment, decrement } = useCounterStore();
    import "../aframe/chronometer.js";




    defineProps({
      scale: Number,
    });


    
    //const squareApproaches = ref(0); // Variable to count square approaches

    // Function to increment the squareApproaches count
    const incrementSquareApproaches = (e) => {


      
    //delete boxLeft


      document.getElementById(`box-${e}`).remove();
      document.getElementById(`${e+20}`).setAttribute('visible', 'true');

      



        increment();
        console.log(counter.value);

        if (counter.value === 10) {

          
          console.log('you won');
          document.querySelector('#zoro1').setAttribute('visible', 'false');
          document.querySelector('#zoro2').setAttribute('visible', 'true');
          document.querySelector('#text1').setAttribute('visible', 'false');
      document.querySelector('#text2').setAttribute('visible', 'false');
          document.querySelector('#text5').setAttribute('visible', 'true');
          document.querySelector('#text6').setAttribute('visible', 'true');


          //enregistre le temps dans le local storage si il est plus grand


          let time = document.querySelector('#text1').getAttribute('value');


          localStorage.setItem('time', time);          



        }
      

      };


      //on mounted
      onMounted(() => {

        const timerBoxes = document.querySelectorAll(".timer-box");

// Itérer sur chaque élément et définir l'attribut "chronometer" sur "start"
timerBoxes.forEach(function(timerBox) {
    timerBox.setAttribute("chronometer", "start");


});     

// Récupérer la valeur de time depuis le local storage
const time = localStorage.getItem('time');

// Mettre à jour les valeurs des éléments avec les identifiants text7 et text8
document.getElementById('text7').setAttribute('value', 'best score: ' + time);
document.getElementById('text8').setAttribute('value', 'best score: ' + time);



});



 




  function touchGrenade() {
      console.log('you loose');
      document.querySelector('#cageit').setAttribute('visible', 'true');

      //change text value tu you loose
      document.querySelector('#text1').setAttribute('visible', 'false');
      document.querySelector('#text2').setAttribute('visible', 'false');
      document.querySelector('#text3').setAttribute('visible', 'true');
      document.querySelector('#text4').setAttribute('visible', 'true');

      
     
  }


  //fonction check time qui se lance chaque seconde

  setInterval(function() {
   
    console.log(document.querySelector('#text1').getAttribute('value'));
    if (document.querySelector('#text1').getAttribute('value') === "00:01") {
      touchGrenade();
      
    }
    
}, 1000);



  </script>


  <template>
        <a-assets>
          
          
      </a-assets>



    <a-text id="text1" scale="3 3 3" position="1.3 5 1.5" rotation="0 -180 0" value="00:00:00" class="timer-box"
  
    ></a-text>
    <a-text id="text2" scale="3 3 3" position="-1.3 4 -11.2" rotation="180 180 180" value="00:00:00" class="timer-box"
  
    ></a-text>
  

    <a-text id="text3" scale="3 3 3" position="4 5 1.5" rotation="0 -180 0" value="you loosed, zoro is in jail" class="" visible="false"
  
  ></a-text>
    <a-text id="text4" scale="3 3 3" position="-3.5 4 -11.2" rotation="180 180 180" value="you loosed, zoro is in jail" class="" visible="false"
  
  ></a-text>

  <a-text id="text5" scale="3 3 3" position="4 5 1.5" rotation="0 -180 0" value="you won, zoro is free" class="" visible="false"  ></a-text>
    <a-text id="text6" scale="3 3 3" position="-3.5 4 -11.2" rotation="180 180 180" value="you won, zoro is free" class="" visible="false"  ></a-text>

<!-- best score text score in local storage under time -->  



    <a-text id="text7" scale="3 3 3" position="4 6 1.5" rotation="0 -180 0" value="best score: " class="" visible="true"  ></a-text>
    <a-text id="text8" scale="3 3 3" position="-3.5 5 -11.2" rotation="180 180 180" value="best score: " class="" visible="true"  ></a-text>



    <a-entity
      gltf-model="#room"
      rotation="0 90 0"
      position="0 0.5 -5"
      scale="0.5 0.5 0.5"
      
    
    >
    <a-entity
      id="zoro1"
      gltf-model="#zorofaible"
      scale="3 3 3"
      position="0.6 2.4 -0.7"
    ></a-entity>
    <a-entity
      id="zoro2"
      gltf-model="#zorofort"
      scale="3 3 3"
      position="0.6 2.4 -0.7"
      visible="false"
    ></a-entity>

    <a-entity
      id="cageit"
      position="3.5 0.8 2.7"
      gltf-model="#cage"
      scale="3 3 3"
      visible="false"
    ></a-entity>

    <a-box id="blackbox" position="11.5 0 0" material="color: #000; opacity: 0.5" width="2" height="5" depth="5" data-ballscount="0" >
  
  
      <BoxColorChanging
    id="20"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 1 1"
    visible="false"
     @click=""     
     @hide-box=""

      />

      <BoxColorChanging
    id="21"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 1 0.5"
        visible="false"
         @click=""
        @hide-box=""

      />
      <BoxColorChanging
    id="22"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 1 0"
        visible="false"
         @click=""
        @hide-box=""

      />

      <BoxColorChanging
    id="23"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 1 -0.5"
        visible="false"
         @click=""
        @hide-box=""

      />
      
      <BoxColorChanging
    id="24"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 1 -1"
        visible="false"
         @click=""
        @hide-box=""

      />

      <BoxColorChanging
    id="25"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 0.5 1"
        visible="false"
         @click=""
        @hide-box=""

      />

      <BoxColorChanging
    id="26"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 0.5 0.5"
        visible="false"
         @click=""
        @hide-box=""

      />
      <BoxColorChanging
    id="27"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 0.5 0"
        visible="false"
         @click=""
        @hide-box=""

      />

      <BoxColorChanging
    id="28"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 0.5 -0.5"
        visible="false"
         @click=""
        @hide-box=""

      />
      
      <BoxColorChanging
    id="29"
    :scale="scale"
    :color="colorBoxLeft"
    position="0.5 0.5 -1"
        visible="false"
         @click=""
        @hide-box=""

      />

      <BoxColorChanging
    id="30"
    :scale="scale"
    :color="colorBoxLeft"
    position="-0.5 0.5 0.5"
        visible="false"
         @click=""
        @hide-box=""

      />
      <BoxColorChanging
    id="31"
    :scale="scale"
    :color="colorBoxLeft"
    position="-0.5 0.5 0"
        visible="false"
         @click=""
        @hide-box=""

      />

          <BoxColorChanging
        id="32"
        :scale="scale"
        :color="colorBoxLeft"
        position="-0.5 0.5 -0.5"
            visible="false"
             @click=""
        @hide-box=""
  />

  <BoxColorChanging
        id="33"
        :scale="scale"
        :color="colorBoxLeft"
        position="-0.5 0.5 -0.5"
            visible="false"
             @click=""
        @hide-box=""
  />
          
    </a-box>

    <a-box id="wall" position="-0.5 0 13" src="#wood-texture" width="26" height="50" depth="0.5" data-ballscount="0" ></a-box>



      <Grenade
      id="gren-1"
        :scale="scale"
        position="0 -1.5 8"
        @click="touchGrenade();"
        @hide-box="touchGrenade();"
        
      
      ></Grenade>

      <Grenade
      id="gren-2"
        :scale="scale"
        position="1 -1.5 -9"
        @click="touchGrenade();"
        @hide-box="touchGrenade();"
        
      
      ></Grenade>
      <Grenade
      id="gren-3"
        :scale="scale"
        position="0 -1.5 -9"
        @click="touchGrenade();"
        @hide-box="touchGrenade();"
        ></Grenade>

        <Grenade
      id="gren-4"
        :scale="scale"
        position="1 -1.5 8"
        @click="touchGrenade();"
        @hide-box="touchGrenade();"
        
      

        
      
      ></Grenade>
      <BoxColorChanging
        id="box-1"
        :scale="scale"
        :color="colorBoxLeft"
        position="6.5 -1 -7"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(1);"
        
      />

      <BoxColorChanging
        id="box-2"
        :scale="scale"
        :color="colorBoxLeft"
        position="5 -1 -7"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(2);"

        
      />

      <BoxColorChanging
        id="box-3"
        :scale="scale"
        :color="colorBoxLeft"
        position="3 -1 -8"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(3);"

        
      />
      <BoxColorChanging
        id="box-4"
        :scale="scale"
        :color="colorBoxRight"
        position="-7 -1 5"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(4);"

        
      />

      <BoxColorChanging
        id="box-5"
        :scale="scale"
        :color="colorBoxRight"
        position="-5 -1 5"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(5);"

        
      />

      <BoxColorChanging
        id="box-6"
        :scale="scale"
        :color="colorBoxRight"
        position="-3 -1 5"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(6);"
        
      />

      <BoxColorChanging
        id="box-7"
        :scale="scale"
        :color="colorBoxRight"
        position="-1 -1 9"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(7);"

        

      />

      <BoxColorChanging
        id="box-8"
        :scale="scale"
        :color="colorBoxRight"
        position="1 -1 9"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(8);"

        
      />

      <BoxColorChanging
        id="box-9"
        :scale="scale"
        :color="colorBoxRight"
        position="3 -1 8"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(9);"

        
      />

      <BoxColorChanging
        id="box-10"
        :scale="scale"
        :color="colorBoxRight"
        position="5 -1 2"
        @click="incrementSquareApproaches();"
        @hide-box="incrementSquareApproaches(10);"

        
      />

    </a-entity>

    <ExitDoor />

    <!-- Main room navigation mesh  -->
    <a-entity
      class="nav-mesh-floor"
      geometry="primitive: plane; height: 10.9; width: 12"
      position="0 0.01 -3.79"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: red"
      visible="false" 
      scale="1 1 1"    
      


    ></a-entity>


  </template>



<!--
   stocage local
   minuteur qui marche
   comprendre le loose
   degager les plane
   modifier l'apparences des sales du prof
   degager le teleporteur de la fenetre
   le son 
   les copyright
   baisser les boules

-->