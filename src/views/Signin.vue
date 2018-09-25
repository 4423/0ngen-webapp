<template>
  <div class="signin">
    <img src="../assets/logos.png">
    <div class="triangle"></div>
    <h2>Sign in</h2>
    <div id="panel">
      <p id='errormsg' v-if="errormsg">{{ errormsg }}</p>
      <p>
        <input type="text" placeholder="Username" v-model="username">
      </p>
      <p>
        <input type="password" placeholder="Password" v-model="password">
      </p>
      <p>
        <button @click="signIn">Sign in</button>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      errormsg: '',
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          this.errormsg = err.message
        })
    }
  }
}
</script>

<style scoped>
.signin {
  margin: 20px auto;
  max-width: 300px;
}

img {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
}

.triangle {
  width: 0;
  margin: 0 auto;
  border: 12px solid transparent;
  border-bottom-color: #dc3545;
}

h2 {
  margin: 20px;
  margin-bottom: 5px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
}

#panel {
  padding: 12px;
}
#panel p {
  padding: 12px;
  margin: 0 auto;
  font-size: 0.95em;
}

#errormsg {
  color: #dc3545;
}

input {
  width: 100%;
  padding: 16px;
  border: 1px solid #bbb;
  color: #555;
}

button {
  width: 100%;
  padding: 16px;
  border: 1px solid transparent;
  background: #e95377;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #ec728f; 
}
</style>
