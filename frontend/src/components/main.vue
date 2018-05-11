<template>
  <div>
    <p>main</p>
    <p>---</p>
    <p>{{ $route.params.user_id }}</p>
    <p>---</p>
    <p>{{ user.phone_number }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      user: {
        phone_number: ''
      }
    }
  },
  created () {
    var user_id = this.$route.params.user_id

    this.$http.get(`/api/login/get_info_id/${this.$route.params.user_id}`)
    .then((response) => {
      this.user.phone_number = response.data.phone_number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
