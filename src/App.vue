<template>
  <div class="container">
    <div v-if="!$route.meta.hideNavbar" class="nav">
      <div class="nav-logo">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/onlineshopping.png" alt="">
      </div>
      <div class="nav-menu">
        <div class="username-con">USER: {{username}} </div>
      <!-- <router-link to="/login">Login</router-link> -->
      <router-link class="nav-item" to="/home">HOME</router-link>
      <a href="/#/sell">SELL</a>
      <a href="/#/favorites">FAVORITES</a>      
      <a class="logout-con" @click="logout">LOGOUT</a>
      <a class="cart-con" href="/#/cart"> <img src="https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Free-Commercial-Use-Image.png" alt=""> <div class="cart-items">{{cart.length}}</div></a>       
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getApi')
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    username() {
      return this.$store.state.loggedUser.name
    }
  },
  methods: {
    logout() {
    this.$router.push('/')
    let emptyArr = [].shift()
    this.$store.dispatch('logoutDeleteLoggedArr', emptyArr)
    }
  }
}
</script>

<style scoped>

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

.logout-con{
  cursor: pointer;
}

.cart-items {
  position: absolute;
  bottom: 934px;
  right: 19px;
  background: rgb(197, 11, 11);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  text-align: center;
  color: white;
  font-size: 0.8rem;
}

a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.username-con {
  font-weight: bold;
}

.nav-menu img {
  width: 30px;
  height: 30px;
}

.nav-logo img {
  width: 105px;
  height: 105px;
}

.container {
  background-color: rgb(238,245,255);
}

.nav {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px rgb(226, 226, 226) solid;
  box-shadow: 3px 0px 10px -3px rgba(0,0,0,0.65)  

}

.nav-menu {
  height: 70px;
  display: flex;
  align-items: center;
}

.nav div{
  margin-left: 5px;
  margin-right: 20px;
}

.nav a{
  margin-left: 5px;
  margin-right: 20px;
}

.nav-item {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
