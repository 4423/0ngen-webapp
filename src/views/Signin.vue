<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          alert('Success!')
          this.$router.push('/')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
