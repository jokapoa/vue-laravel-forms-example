require('./bootstrap');
require('vue-laravel-forms');

Vue.component('register', require('./components/auth/register.vue'));

const app = new Vue({
    el: 'body'
});
