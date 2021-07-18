<template>
  <div>
    <div>{{ data.state }}</div>
    {{ data.name }}
    {{ count }}
    <hr/>

    <button @click="changeName">mutations</button>
    <br>
    <button @click="over">actions</button>
    <hr/>
    {{ data.moduleA }}--
    {{ data.moduleB }}
    <Icon/>
    <hr>
    <p>ModeA</p>
    {{ data.MaName }}
  </div>
</template>


<script>
import {computed, defineComponent, reactive} from 'vue'
import {useStore} from 'vuex'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon
  },
  computed: {
    count() {
      return this.$store.state.userInfo.name + 'ade'
    }
  },
  setup() {
    const store = useStore()
    const data = reactive({
      name: computed(() => store.getters.userInfoGetter),
      state: '信息还没修改！',
      moduleA: store.state.ma.name,
      moduleB: store.state.mb.name,
      MaName: computed(() => store.getters.userInfoGetterMa)
    })
    console.log(store.getters)
    const changeName = () => {
      data.name === 'kang' ? store.commit('getUserInfo', 'ade') : store.commit('getUserInfo', 'kang')
    }
    const over = () => {
      store.dispatch('asyncGetUserInfo').then(() => {
        data.state = '信息修改成功'
      })
    }
    return {data, changeName, over}
  }
})
</script>
