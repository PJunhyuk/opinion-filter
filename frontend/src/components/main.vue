<template>
  <div>
    <div v-if="user.status <= 112-1">
      <p>{{ user.phone_number }}</p>
      <p>{{ user.status + 1 }}</p>
      <hr/>
      <label for="one">
        <input type="radio" id="one" value="1" v-model="user.checked">
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.JPG'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.JPG'" />
      </label>
      <label for="two">
        <input type="radio" id="two" value="2" v-model="user.checked">
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.png'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.png'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpg'" />
      </label>
      <!-- <label for="three">
        <input type="radio" id="three" value="3" v-model="user.checked">
        <img class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_f2.jpeg'" />
      </label> -->
      <label for="four">
        <input type="radio" id="four" value="4" v-model="user.checked">
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.JPG'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_cream.JPG'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_c1.jpg'" />
      </label>
      <!-- <label for="five">
        <input type="radio" id="five" value="5" v-model="user.checked">
        <img class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_lovely.jpeg'" />
      </label> -->
      <!-- <label for="six">
        <input type="radio" id="six" value="6" v-model="user.checked">
        <img class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_original.jpeg'" />
      </label> -->
      <!-- <label for="seven">
        <input type="radio" id="seven" value="7" v-model="user.checked">
        <img class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_rosy.jpeg'" />
      </label> -->
      <label for="eight">
        <input type="radio" id="eight" value="8" v-model="user.checked">
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) < 18" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.jpeg'" />
        <img v-if="(user.status + 1) % 4 === 0 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpg'" />
        <img v-if="(user.status + 1) % 4 === 1 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.png'" />
        <img v-if="(user.status + 1) % 4 === 2 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_tr2.jpg'" />
        <img v-if="(user.status + 1) % 4 === 3 && (user.status + 1) > 17" class="dataset-img" :src="'http://jgravity0.cafe24.com/dataset/image_' + (this.user.status+1).toString() + '/image_' + (this.user.status+1).toString() + '_hula.png'" />
      </label>
      <hr/>
      <button @click="btn_next">NEXT</button>
    </div>
    <div v-else>
      <img class="main-logo" src="../assets/OPINION_logo_blue.png">
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
      }
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
.dataset-img {
  width: 24%;
}
@media (max-width: 768px) {
  .dataset-img {
    width: 80%;
  }
}

/* Input style */
label > input{ /* HIDE RADIO */
  visibility: hidden; /* Makes input not-clickable */
  position: absolute; /* Remove input from document flow */
}
label > input + img{ /* IMAGE STYLES */
  cursor:pointer;
  border:2px solid transparent;
}
label > input:checked + img{ /* (RADIO CHECKED) IMAGE STYLES */
  border:2px solid #f00;
}

</style>
