/*
 var Vue = require('vue');
 var test = require('./components/test.vue');
 var bbb = new Vue({
 el: 'body',
 components: {
 test:test
 }
 });
 */
import Vue from 'vue'
import test from './test.vue'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {test}
})
