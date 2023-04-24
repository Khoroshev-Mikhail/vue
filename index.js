
Vue.component('todo-li', {
    props: ['list'],
    template: '<li>{{list}}</li>'
})

var ara = new Vue({
    el: '#ara',
    data: {
        text: 'text',
        list: [1,2,3,4]
    },
})
