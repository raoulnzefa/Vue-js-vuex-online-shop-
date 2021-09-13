<template>
<div class="container">
    <div class="con">
        <p>Favorites</p>
        <div v-for="item in favorites" :key="item.id" class="product-container">
            <div  class="product-items">
                <div>
                    <img @click="toProduct(item)" :src="item.image" alt="">
                </div>
                <div class="title-container">
                    <h2>{{item.title}}</h2>                
                </div>
                <div class="price-container">
                <span>{{item.price}}<span></span> $</span>                    
                </div>
                <button class="delete-btn" @click="deleteItem(item.id)">Delete</button>                
            </div>
        </div>
        
    </div>
</div>

  
</template>

<script>
export default {
    name: 'Favorites',
    computed: {
        favorites() {
           return this.$store.state.favorites
        },
    },
    methods: {
        deleteItem(id) {
            let favorites = this.$store.state.favorites.findIndex(x => x.id === id)
            let favorites2 = this.$store.state.favorites
            favorites2.splice(favorites, 1)
            this.$store.dispatch('deleteFavorites', favorites2)
        },
        toProduct(item) {
            let id = item.id
            let products = this.$store.state.products.filter(x => x.id === id)
            let oneProduct = this.$store.state.oneProduct
            oneProduct.unshift(products)
            oneProduct.pop()
            // this.$store.dispatch('getOneProduct', oneProduct)
            this.$router.push('/productPage/'+id)
            console.log('one prod', this.$store.state.oneProduct)
        },        
    }
}
</script>

<style scoped>

* {
          font-family: 'Rubik', sans-serif;
}

p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.5rem;
}

.delete-btn {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    margin-left: 5px;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: rgb(27, 79, 236);
}

.delete-btn:active {
    background-color: rgb(55, 90, 196);
}


.plus-minus-container {
    border-bottom: rgb(148, 148, 148) 1px solid;
    display: flex;
    align-items: center;
    margin-right: 15px;
}

.add-remove-btn {
    background-color: white;
    border: white;
    font-size: 1.9rem;
    font-weight: bold;
    cursor: pointer;
}

.add-remove-btn:hover {
    background-color: rgb(90, 90, 90);
    color: white;
}


.add-remove-btn:active {
    background-color: white;
    color: rgb(90, 90, 90);
}

.con {
    width: 650px;
}

.quantity {
    margin: 0 10px;
}

.price-container {
    width: 90px;
}

.price-container div {
    font-weight: bold;
    margin-right: 15px;
}

.container {
    max-width: 1250px;
    margin: 50px auto;
    /* box-shadow: 3px 0px 10px -3px rgba(0,0,0,0.65); */
    display: flex;
    justify-content: center;

}

.product-container {
    border: solid 1px rgb(207, 207, 207);
    height: 200px;
    width: 120%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
}

.product-container:hover {
    transform: scale(1.01);
    background-color: rgb(248, 248, 248);
}

.product-container img {
    margin-top: 10px;
    margin-right: 15px;
    width: 80px;
    height: 80px;
    cursor: pointer;
}

.product-items {
    display: flex;
    align-items: center;
    margin-left: 50px;
}

.product-items h2 {
    font-size: 1.0rem;
    text-decoration: underline;
}

.title-container {
    width: 180px;
    margin: 0 20px;
}

.checkout-container {
    border: solid 1px rgb(207, 207, 207);
    height: 250px;
    width: 400px;
    margin-left: 200px;
}

.checkout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: 10px;
}

.checkout-container button {
    background-color: rgb(54,101,243);
    border: white;
    color: white;
    padding: 20px 80px;
    font-size: 1rem;
    margin-left: 5px;
    cursor: pointer;
}

.checkout-container button:hover {
    background-color: rgb(27, 79, 236);
}

.checkout-container button:active {
    background-color: rgb(55, 90, 196);
}

.total-con {
    display: flex;
    margin-top: 35px;
    border-top: solid 1px rgb(207, 207, 207);
    font-size: 1.5rem;
}

.total-con div{
    margin-right: 50px;
}

</style>