<template>
     <div class="fav">
                <img
                  src="@/assets/image/fav.png"
                  alt="fav"
                  v-if="show"
                  @click="showFav"
                />
                <img
                  src="@/assets/image/fav2.png"
                  alt="fav"
                  v-else
                  @click="showFav"
                />
              </div>
</template>
<script>
export default{
    data(){ 
        return{
            show: true,

        }
    },
    methods: {
    showFav() {
      this.show = !this.show;
    },
}
}
</script>