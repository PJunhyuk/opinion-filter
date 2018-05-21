<template>
  <div>
    <div v-if="user.status <= 2">
      <p>{{ $route.params.user_id }}</p>
      <p>{{ user.phone_number }}</p>
      <p>{{ user.status + 1 }}</p>
      <hr/>
      <input type="radio" id="one" value="1" v-model="user.checked">
      <label for="one">1</label>
      <input type="radio" id="two" value="2" v-model="user.checked">
      <label for="two">2</label>
      <hr/>
      <button @click="btn_next">NEXT</button>
    </div>
    <div v-else>
      <img src="../assets/OPINION_logo_blue.png">
      <div class="main">
        <h1><b>OPINION</b>: Filter</h1>
        <p>세상의 모든 생각, 오피니언</p>
        <h2>준비한 질문이 끝났습니다. 감사합니다!</h2>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'main',
  data () {
    return {
      user: {
        phone_number: '',
        status: '',
        checked: ''
      },
    }
  },
  created () {
    var user_id = this.$route.params.user_id

    this.$http.get(`/api/users/get_info_id/${this.$route.params.user_id}`)
    .then(
      (response) => {
        this.user.phone_number = response.data.phone_number
        this.user.status = response.data.status
      },
      (error) => { // url이 db의 user_id 중 하나가 아닌 경우
        this.$router.push({ name: 'error'}) // /error 페이지로 이동
      }
    )
  },
  methods: {
    btn_next: function() {
      if (this.user.checked === '' | this.user.checked === '0' | this.user.checked === false) {
        alert('아무 것도 선택하지 않으시면 다음 질문으로 넘어갈 수 없습니다!')
      } else {
        this.user.status++ // 보이는 것 업데이트
        this.$http.post('/api/users/status_up', { // status_up 을 통해 db 도 업데이트
          user: this.user
        })
        .then(
          (response) => {
            this.$http.post('/api/users/response', { // response 를 통해 status 상태의 q_ 값을 checked 값으로 업데이트
              user: this.user
            })
            .then(
              (response) => {
                this.user.checked = false // 버튼 클릭할 때마다 radio checked 된 것들 초기화
              }
            )
          }
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
