<template>
  <div>
    <div>

      <h1 class="title">Store Test</h1>
      <p></p>
      <h2>count: {{ $store.state.count }}</h2>
      <h2>HomeCount: {{ $store.state.homeCount }}</h2>
      <p>HomeCount is the number of times the home page has been visited since server load</p>
      <p></p>
      <button class="button" @click="$store.commit('increment')">increment</button>
      <button class="button"  @click="$store.commit('decrement')">decrement</button>
      <button class="button"  @click="$store.commit('reset')">reset</button>
      <p><nuxt-link to="/" class="button">Back home</nuxt-link></p>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
// .container {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }
h1 {
  font-weight: 400;
}

p {
  margin-top: 20px;
}
</style>