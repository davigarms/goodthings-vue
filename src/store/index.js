import { createStore } from "vuex"
import goodthings from './modules/goodthings'

//Create store
const store = createStore({
  modules: {
    goodthings
  }
})

export default store;