import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //接收學生資料
    students:null,
  },
  mutations: {
    fillClassData(state,data){
      state.students=data
    }
  },
  actions: {
    getClassData(context){
      return axios.get('https://mocki.io/v1/a6a94b56-4afb-4d11-8200-6865aff2168f').then((res)=>{
        context.commit('fillClassData',res.data)
      })
    }
  }
})
