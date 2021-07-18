<template>
  <div>
    <h1>我是ICON组件</h1>
    <div>{{ data.name }}</div>
  </div>
</template>


<script>
import {computed, defineComponent, reactive} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const data = reactive({
      name: computed(() => store.getters.userInfoGetter)
    })

    return {data}
  }
})
</script>
