import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import elements from '@/store/elements';

export default new Vuex.Store({
  modules: { elements },
});
