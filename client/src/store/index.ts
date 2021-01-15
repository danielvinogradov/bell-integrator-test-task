import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import elements from '@/store/elements';
import logs from '@/store/logs';

export default new Vuex.Store({
  modules: { elements, logs },
});
