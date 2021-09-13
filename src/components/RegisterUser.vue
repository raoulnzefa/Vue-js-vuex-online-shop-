<template>
  <div class="main-container">
      <div class="login-form">
          <h2>Hello</h2>
          <input v-model="name" type="text" placeholder="User name">
          <input v-model="password" type="password" placeholder="Password">
          <input v-model="password2" type="password" placeholder="Reapeat Password">          
          <input v-model="email" type="email" placeholder="Email">
          <button @click="toRegister" class="login-btn">Register</button>
          <div class="error" v-if="isvisible">Username or email already exists</div>
          <div class="error" v-if="isvisible2">Please fill all fields</div>
          <div class="error" v-if="isvisible3">Password does not match</div>
          <div class="error" v-if="isvisible5">Password or name should be at least 3 characters</div>                    
          <p>have account? please <button @click="toLogin" class="reg-btn">Login</button></p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RegisterUser',
    data() {
        return {
                name: '',
                password: '',
                password2: '',
                email: '',
                isvisible: false,
                isvisible2: false,
                isvisible3: false,
                isvisible5: false
                
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/')
        },
        toRegister() {
            if(this.name === '' || this.password === '' || this.password2 === '' || this.email === '') {
                console.log('Please fill all fields')
                this.isvisible2 = true
                this.isvisible5 = false
                this.isvisible3 = false
                this.isvisible = false
            } else {
                if(this.name.length <= 3 || this.password.length <= 3 || this.password2.length <= 3) {
                    this.isvisible5 = true
                    this.isvisible2 = false
                    this.isvisible3 = false
                    this.isvisible = false
                    console.log('shoul be 3')
                } else {
            let validUser = this.$store.state.dataUserStore.filter(x => x.name === this.name || x.email === this.email)
            if(validUser.length === 1) {
                console.log("Username already exists")
                this.isvisible = true
                this.isvisible2 = false
                this.isvisible3 = false
            } else if (this.password !== this.password2) {
                console.log('password does not match')
                this.isvisible3 = true
                this.isvisible2 = false
                this.isvisible5 = false
                this.isvisible = false
            } else {
            const dataUser = 
                {
                    name: this.name,
                    password: this.password,
                    email: this.email                  
                }
            this.$router.push('/')
            this.$store.dispatch('getUser', dataUser)                
            }

            }                    
                }


        }
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
    align-items: center;
    height: 800px;
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
 margin-left: 15px;
}

.reg-btn {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 5px;
    font-size: 0.8rem;
    margin-left: 5px;
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