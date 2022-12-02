<template>
  <div class="class-container">
    <table class="class-table">
        <thead>
          <tr>
            <th>學生姓名</th>
            <th>座號</th>
            <th>綽號</th>
            <th>家庭狀況</th>
            <th>路隊</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in classStudents" :key="student.seatNumber">
            <td>{{student.name}}</td>
            <td>{{student.seatNumber}}</td>
            <td>{{student.nickName}}</td>
            <td>{{student.family}}</td>
            <td>{{student.roadTeam}}</td>
            <div class="input-block">
              <td>
                <div><input v-model="student.nickName" type="text" placeholder="輸入綽號"  maxlength="10"></div>
              </td>
              <td>
                <div class="family-block">
                      <label for="rich">
                      <input v-model="student.family" type="radio" name="family" value="富有">
                      富有
                      </label>
                      <label for="a-little-rich">
                      <input v-model="student.family" type="radio" name="family" value="小康">
                      小康
                      </label>
                      <label for="normal">
                      <input v-model="student.family" type="radio" name="family" value="普通">
                      普通
                      </label>
                      <label for="poor">
                      <input v-model="student.family" type="radio" name="family" value="貧窮">
                      貧窮
                      </label>
                  </div>
              </td>
              <td>
                <div class="roadTeam-block">
                      <select v-model="student.roadTeam" name="roadTeam">
                      <option value="第一路隊">第一路隊</option>
                      <option value="第二路隊">第二路隊</option>
                      <option value="第三路隊">第三路隊</option>
                      <option value="第四路隊">第四路隊</option>
                      </select>
                  </div>
              </td>
            </div>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'HelloClass',
  props: {
    'classStudents':{
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.class-container{
  padding: 0 5%;
  .class-table{
    width:85%;
    margin: 0 auto;
    border: 2px black solid;
    .input-block{
      display: inline-block;
      margin-left: 5%;
      .roadTeam-block{
        margin-left: 10px;
      }
    }
  }
}
</style>
