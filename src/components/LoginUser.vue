<template>
  <div class="main-container">
      <div class="login-form">
          <h2>Hello</h2>
          <input v-model="name" type="text" placeholder="User name">
          <input v-model="password" type="password" placeholder="Password">
          <button @click="toLogin" class="login-btn">Login</button>
          <div class="error" v-if="isvisible">Wrong user name or password</div>
          <p>dont't have account? please <button class="reg-btn" @click="toRegister">Register</button></p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LoginUser',
    data() {
        return {
            name: '',
            password: '',                
            isvisible: false
        }
    },
      methods: {
    toRegister() {
      this.$router.push('/register')
    },
    toLogin() {
        console.log(this.$store.state.dataUserStore)
        let validUser = this.$store.state.dataUserStore.filter(x => x.name === this.name && x.password === this.password)    
        console.log('loggged userrr', this.$store.state.loggedUser)
        if(validUser.length === 1) {
            this.$router.push('/home')
            const loggedUser = {
                name: this.name,
                password: this.password,
            }
            this.$store.dispatch('getLoggedUser', loggedUser)      
        } else {
            console.log('wrong password')
            this.username = ''
            this.userpassword = ''
            this.isvisible = true
        }

    },
  },
}
</script>

<style scoped>


* {
            font-family: 'Rubik', sans-serif;
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;;
    height: 800px;
    padding-top: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.login-btn {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 10px;
    font-size: 1.5rem;
    margin: 10px;
    cursor: pointer;
}

.login-btn:hover {
    background-color: rgb(27, 79, 236);
}

.login-btn:active {
    background-color: rgb(55, 90, 196);
}

.login-form input{
    border: white;
    border-bottom: solid 1px rgb(138, 138, 138);    
    padding: 15px 50px;
    margin: 10px;
    background-color: rgb(238,245,255);
}

.login-form input:focus{
    outline: none;
    border-bottom: solid 1px rgb(10, 23, 51);
}

.login-form h2{
margin: 10px;
}

.login-form p{
 font-size: 0.9rem;
}
.reg-btn {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 5px;
    font-size: 0.8rem;
    margin: 8px;
    cursor: pointer;
}

.reg-btn:hover {
    background-color: rgb(27, 79, 236);
}

.reg-btn:active {
    background-color: rgb(55, 90, 196);
}

.error {
    color: red;
    font-size: 0.8rem;
    margin-left: 10px;
}
</style>