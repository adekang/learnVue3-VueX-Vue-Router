<template>
  <router-link to="/">index</router-link>
  --
  <router-link :to="{name:'demoA',params:{username:'ade kang',id:'555'}}">demoA</router-link>
  --
  <router-link to="/b">demoB</router-link>

  <router-view></router-view>
</template>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
  mounted() {
    console.log(this.$route)
    console.log(this.$router)

  },
  setup() {
  }
})
</script>
