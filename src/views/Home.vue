<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>你的班級</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: '班級首頁',
    meta:[
      {vmid:'description',name:'description',content:'這是班級首頁'}
    ]  
  }
}
</script>

<style scoped lang="scss">
.home{
  margin-top: 15%;
}
</style>