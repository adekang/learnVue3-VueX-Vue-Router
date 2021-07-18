<template>
  <h1>我是DemoA</h1>
  {{ $route.params.username }}-{{ $route.params.id }}
</template>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'demoA',
  setup() {

  }
})
</script>
