<template>
<div class="container">
    <div class="product-container" v-for="item in product" :key="item.id" >
        <div class="product-items">
            <div>
                <img @click="toProduct(item)" :src="item.image" alt="">                
            </div>
            <div>
            <h2>{{item.title}}</h2>
            <span>{{item.price}}<span></span> $</span>
            <p>{{item.description}}</p>
            <button @click="add(item)">Add to cart</button>            
            <p>{{user.name}}</p>
            </div>

        </div>
    </div>
</div>

  
</template>


<script>
export default {
    name: 'Product',
    computed: {
        product() {
           return this.$store.state.oneProduct[0]
        },
        user() {
            return this.$store.state.loggedUser
        }
    },
    methods: {
        toProduct(item) {
            let id = item.id
            this.$router.push('/productPage/'+id)
        },
        add(item){
            let id = item.id
            this.$store.dispatch('addProduct', id)
        },        
    }
}
</script>

<style scoped>

* {
    font-family: 'Rubik', sans-serif;
}


.container {
    display: flex;
    align-items: center;
    height: 880px;
}

.product-container {
    max-width: 1250px;
    margin: 0 auto;
    box-shadow: 3px 0px 10px -3px rgba(0,0,0,0.65);
    height: 350px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
}

.product-container img {
    margin: 80px 40px;
    width: 250px;
    height: 250px;
    cursor: pointer;
}

.product-items {
    display: flex;
    align-items: center;
}

.product-items h2 {
    font-size: 1.0rem;
}

.product-container button {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 5px;
    font-size: 0.8rem;
    cursor: pointer;

}

.product-container button:hover {
    background-color: rgb(27, 79, 236);
}

.product-container button:active {
    background-color: rgb(55, 90, 196);
}

</style>