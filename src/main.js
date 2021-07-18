import {createApp} from 'vue'
import store from './store'
import router from './router/router'

import App from './App.vue'

const app = createApp(App)


// window.sessionStorage.setItem('token', 'bsdhcbhsdbcjansjcnajs')

app.use(router)
app.use(store)
app.mount('#app')

