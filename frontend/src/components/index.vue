<template>
  <div>
    <img class="main-logo" src="../assets/OPINION_logo_blue.png">
    <div class="main">
      <h1><b>OPINION</b>: Filter</h1>
      <p>세상의 모든 생각, 오피니언</p>
      <h2>당신의 의견을 들려주세요!</h2>
    </div>
    <div class="login">
      <input v-model="user.phone_number" placeholder="핸드폰 번호" v-on:keyup.enter="login" :maxlength="11">
      <p>{{ is_phone (user.phone_number) }}</p>
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
      <p>총 112개의 문제가 준비되어 있으며, 각각의 문제에는 서로 다른 필터를 적용한 4개의 이미지가 보기로 나옵니다.</p>
      <h4>각각의 문제에 대해 가장 "마음에 드는" 이미지를 선택해주세요!</h4>
      <p style="color: red; font-weight: bold;">50문제 이상 진행하신 분들에게 추첨을 통해 상품을 드립니다!!</p>
      <p style="color: red; font-weight: bold;">112문제 모두를 진행하신 분들에게는 또 하나의 특별한 상품(?)을 드립니다!!</p>
      <a href="https://www.facebook.com/junhyuk.park.750">세부 내용 보러가기(페이스북)</a>
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
    is_phone (num) {
      if (/^\d+$/.test(num)) {
        if (num.length === 11) {
          return '확인되었습니다!'
        } else {
          return '11자리여야 합니다'
        }
      } else {
        return '- 를 제외하고 숫자만 입력해주세요'
      }
      // return /^\d+$/.test(num) ? (num.length === 11 ? '확인되었습니다!' : '11자리여야 합니다') : '- 를 제외하고 숫자만 입력해주세요'
    },
    login: function (event) {
      if (this.user.phone_number.length < 11) {
        alert("11자리여야 합니다")
      } else if (!(/^\d+$/.test(this.user.phone_number))) {
        alert("숫자만 입력해주세요")
      } else {
        // 해당 phone_number의 유저가 있는지를 check를 통해 체크
        this.$http.post('/api/users/check', {
          user: this.user
        })
        .then(
          (response) => { // 있음 -> 로그인 성공
            alert('이미 있는 휴대폰 번호입니다. 로그인합니다.')

            // phone_number 에 해당하는 User 의 _id 찾은 다음, 그 링크로 접근
            this.$http.get(`/api/users/get_info/${this.user.phone_number}`)
            .then((response) => {
              this.$router.push({ name: 'main', params: { user_id: response.data._id } }) // /main 페이지로 이동
            })
          },
          (error) => { // 없음 -> 자동 회원가입
            this.$http.post('/api/users/signUp', { // signUp을 통해 새로운 유저 생성
              user: this.user
            })
            .then(
              (response) => { // 정상적으로 생성
              if (response.data.result === 0) { // 에러 발생
                alert('에러가 발생했습니다. 관리자한테 문의해주세요.')
              }
              if (response.data.result === 1) { // 정상적으로 생성
                alert('새로운 휴대폰 번호입니다. 자동 로그인합니다.')

                // phone_number 에 해당하는 User 의 _id 찾은 다음, 그 링크로 접근
                this.$http.get(`/api/users/get_info/${this.user.phone_number}`)
                .then((response) => {
                  this.$router.push({ name: 'main', params: { user_id: response.data._id } }) // /main 페이지로 이동
                })
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button:focus {
  outline: none;
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
