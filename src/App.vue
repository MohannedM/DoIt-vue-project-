<template>
  <div id="app">
      <app-header></app-header>
      <transition name="slide-up" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import Header from './components/Header.vue';
export default{
  components:{
    appHeader: Header
  }
}

</script>
<style scoped>
.slide-up-enter-active{
  animation: slide-in 0.3s ease-out forwards;
}
.slide-up-leave-active{
  animation: slide-out 0.3s ease-out forwards;
}
@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0px);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>



