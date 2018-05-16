<template>
  <div>
    <p>{{ $route.params.user_id }}</p>
    <p>{{ user.phone_number }}</p>
    <p>{{ user.status }}</p>
    <hr/>
    <input type="radio" id="one" value="1" v-model="user.checked">
    <label for="one">1</label>
    <input type="radio" id="two" value="2" v-model="user.checked">
    <label for="two">2</label>
    <hr/>
    <button @click="btn_next">NEXT</button>
  </div>
</template>
<script>
/* eslint-disable */
export default {
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
    .then((response) => {
      this.user.phone_number = response.data.phone_number
      this.user.status = response.data.status
    })
  },
  methods: {
    btn_next: function() {
      this.user.status++ // 보이는 것 먼저 업데이트
      this.$http.post('/api/users/status_up', { // status_up 을 통해 db 도 업데이트
        user: this.user
      })
      this.$http.post('/api/users/response', { // response 를 통해 status 상태의 q_ 값을 checked 값으로 업데이트
        user: this.user
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
