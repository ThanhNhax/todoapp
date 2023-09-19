<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: [
        "foodName", 'foodDesc', 'isFavorite'
    ],
    data() {
        return {
            foodIsFavorite: this.isFavorite,
        }
    },
    methods: {
        toggleFavorite() {
            // this.foodIsFavorite = !this.foodIsFavorite
            this.$emit('toggle-favorite')
        }
    }
}
</script>

<style scoped>
#redDiv {
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    display: inline-block;
}
</style>  