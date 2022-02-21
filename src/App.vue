

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >{{ $route.meta.title }} / {{ count }}</h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
/* SCRIPT setup CAN NOT CONTAIN export default */
import { useStore } from './stores/store';
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore()
    // const {count} = store // NOT REACTIVE 
    const { count } = storeToRefs(store);
    console.log(count.value);
    return {count}
  },


};

</script>
