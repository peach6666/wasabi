<template>
  <div class="about">
    <HelloClass :class-students="students"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloClass from '@/components/HelloClass.vue'

export default {
  name: 'About',
  metaInfo: {
    title: '關於班級',
    meta:[
      {vmid:'description',name:'description',content:'班級學生資訊'}
    ]
  },
  components: {
    HelloClass,
  },
  mounted(){
    this.$nextTick(async()=>{
      await this.getClassData
      await this.seatNumberSort()
    })
  },
  computed:{
    ...mapState([
      'students'
    ]),
    ...mapActions([
      'getClassData'
    ])
  },
  methods:{
    seatNumberSort(){
      this.students.sort((a,b)=>{
        return a.seatNumber-b.seatNumber
      })
    }
  },
}
</script>