<template>
  <div id="app" :style="{backgroundColor: bgColor[this.colorNow]}">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  mounted(){
    this.$nextTick(()=>{
      this.changeColor()
    })
  },
  data(){
    return{
      colorNow:0
    }
  },
  computed:{
    ...mapState([
      'bgColor'
    ])
  },
  methods:{
    changeColor(){
      setInterval(()=>{
        if(this.colorNow<this.bgColor.length-1){
          this.colorNow++
        }else{
          this.colorNow=0
        }
      },5000)
    }
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  min-height: 100vh;
}

#nav {
  padding: 60px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
