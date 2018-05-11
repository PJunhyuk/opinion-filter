<template>
  <div>
    <p>{{ $route.params.user_id }}</p>
    <p>{{ user.phone_number }}</p>
    <p>{{ user.status }}</p>
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
        status: ''
      }
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
      this.user.status++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
