<template>
  <div>
    <p>main</p>
    <p>---</p>
    <p>{{ $route.params.user_id }}</p>
    <p>---</p>
    <p>{{ get_status ($route.params.user_id) }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  created () {
    this.$http.get('/api/login/get_info')
    .then((response) => {
      console.log(response.data)
      this.users = response.data
    })
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    get_status (user_id) {
      var phone_number = ''
      this.$http.get(`/api/login/get_info_id/${user_id}`)
      .then((response) => {
        console.log(response.data.phone_number)
        phone_number = response.data.phone_number
      })

      console.log(phone_number)
      return phone_number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
