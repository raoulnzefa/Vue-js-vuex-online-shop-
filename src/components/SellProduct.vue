<template>
  <div class="main-container">
      <div class="login-form">
          <h2>Sell your product</h2>
          <input v-model="image" type="text" placeholder="Image(url)">
          <input v-model="title" type="text" placeholder="Title">
          <textarea class="description" v-model="description" type="text" placeholder="Description"></textarea>
          <input v-model="price" type="text" placeholder="Price">
          <input v-model="category" type="text" placeholder="Category">
          <button @click="toUpload" class="login-btn">Upload</button>
          <div class="error" v-if="isvisible">Title minimum length 10 and maximum 200, description minimum 30 maximum 200</div>
          <div class="error" v-if="fillVisible">Please fill all fields</div>
          <div class="completed" v-if="completeVisible">Completed</div>                 
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterUser',
    data() {
        return {
            image: '',
            title: '',
            description: '',
            price:'',
            category: '',
            isvisible: false,
            fillVisible: false,
            completeVisible: false      
        }
    },
    methods: {
        toUpload() {
            if(this.image === '' || this.title === '' || this.description === '' || this.price === '' || this.category === '' ) {
                this.fillVisible = true
                this.completeVisible = false
            } else {
            if (this.title.length <= 10 || this.title.length >= 30 || this.description.length <= 30 || this.title.description >= 200) {
               console.log('title minimum length 10 and maximum 200, description minimum 30 maximum 200')
                this.isvisible = true
                this.completeVisible = false                

            } else {
                     const dataUpload = 
                {
                    image: this.image,
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    category: this.category,
                    id: Math.floor(Math.random() * 10000)
                }
            this.$store.dispatch('getUpload', dataUpload)
            this.image = '',
            this.title = '',
            this.description = '',
            this.price = '',
            this.category = ''
            console.log('title len', this.title.length)
            this.isvisible = false
            this.completeVisible = true
            this.fillVisible = false
           
            }
            }

        }           
    }
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
    height: 880px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.login-btn {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 10px 50px;
    font-size: 1.5rem;
    margin: 10px;
    cursor: pointer;
    width: 450px;
}

.login-btn:hover {
    background-color: rgb(27, 79, 236);
}

.login-btn:active {
    background-color: rgb(55, 90, 196);
}

.login-form input{
padding: 10px;
margin: 10px;
}

.login-form input:focus{
    outline: none;
}

.description {
    padding: 10px;
    margin: 10px;
    height: 100px;
}

.description:focus {
    outline: none;
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

.completed {
    color: green;
    font-size: 0.8rem;
    margin-left: 10px;
}
</style>