
// useCounterStore.js
import { ref } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}

export function useCounterStore() {
  return { counter, increment, decrement };
}
