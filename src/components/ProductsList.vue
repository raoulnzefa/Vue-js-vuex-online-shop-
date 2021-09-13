<template>
<div class="container">
    <div class="products-container">
        <Product/>
    </div>
</div>

</template>

<script>
import Product from '@/components/Product'
export default {
    name: 'ProductsList',
    components: {
        Product
    }

}
</script>

<style scoped>

* {
    font-family: 'Rubik', sans-serif;
}


.products-container {
    max-width: 1250px;
    margin: 0 auto;
    box-shadow: 3px 0px 10px -3px rgba(0,0,0,0.65);
}

</style>