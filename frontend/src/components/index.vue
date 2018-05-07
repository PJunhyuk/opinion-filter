<template>
  <div>
    <div class="main">
      <h1><b>OPINION</b>: Filter</h1>
      <p>세상의 모든 생각, 오피니언</p>
      <h2>당신의 의견을 들려주세요!</h2>
    </div>
    <div class="login">
      <input v-model="user.phone_number" placeholder="핸드폰 번호">
      <!-- <p>{{ is_phone (user.phone_number) }}</p> -->
      <p></p>
      <button v-on:click="login">핸드폰 번호로 로그인</button>
    </div>
    <div class="info">
      <div class="info-phone">
        <p>입력하신 휴대폰 번호는 프로젝트 종료시까지 서버에 저장됩니다.</p>
        <p>중복 참여 방지 및 기프티콘 추첨 이외의 용도로 절대 사용하지 않습니다.</p>
      </div>
      <p>OPINION: Filter는 다양한 필터 중 해당 사진에 가장 어울리는 것을 고르는 형식의 웹앱입니다.</p>
      <p>어떤 상황에 대해 사람들이 '아름답다'고 느끼는 필터는 무엇인지를 찾고, 그 특징을 분석하는 것이 목적입니다.</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'index',
  data () {
    return {
      user: {
        phone_number: ''
      }
    }
  },
  methods: {
    // is_phone (num) {
    //   return /^\d+$/.test(num) ? (num.length === 11 ? '확인되었습니다!' : '11자리여야 합니다') : '- 를 제외하고 숫자만 입력해주세요'
    // },
    login: function (event) {
      // 해당 phone_number의 유저가 있는지를 check를 통해 체크
      this.$http.post('/api/login/check', {
        user: this.user
      })
      .then(
        (response) => { // 있음 -> 로그인 성공
          alert('이미 있는 휴대폰 번호입니다. 로그인합니다.')
          this.$router.push('/hihi') // /hihi 페이지로 이동
        },
        (error) => { // 없음 -> 자동 회원가입
          this.$http.post('/api/login/signUp', { // signUp을 통해 새로운 유저 생성
            user: this.user
          })
          .then(
            (response) => { // 정상적으로 생성
            if (response.data.result === 0) { // 에러 발생
              alert('에러가 발생했습니다. 관리자한테 문의해주세요.')
            }
            if (response.data.result === 1) { // 정상적으로 생성
              alert('새로운 휴대폰 번호입니다. 자동 로그인합니다.')
              this.$router.push('/login') // /login 페이지로 이동
            }
          })
          .catch(function (error) {
            alert('error')
          })
        }
      )
      .catch(error => {
        alert(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button:focus {
  outline: none;
}

.main h1, h2 {
  font-weight: normal;
}
.main h1 {
  color: #0e284b;
}
.main p {
  margin-top: -20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.login {
  margin-top: 30px;
}
.login input {
  width: 250px;
  border: 3px solid black;
  font-size: 18px;
  padding: 8px;
  text-align: center;
}
.login p {
  text-align: right;
  margin-left: -120px;
  padding-left: 50%;
  width: 250px;
  font-size: 12px;
  color: red;
  margin-top: 5px;
}
.login button {
  width: 270px;
  border: 3px solid #0e284b;
  padding: 5px;
  font-size: 18px;
  background-color: #0e284b;;
  color: white;
}
.login button:hover {
  background-color: white;
  color: black;
  border: 3px solid #0e284b;
}

.info {
  margin-top: 30px;
}
.info p {
  font-size: 12px;
  margin: 5px;
}
.info-phone {
  color: red;
  margin-bottom: 15px;
}
</style>
