Vue.component("greeting", {
    template: `<p>{{name}}：大家好，给大家介绍一下我的女朋友@关晓彤
    <button v-on:click='changename'>我叫tom</button></p>`,
    data: function () {
        return {
            name: "鹿晗"
        }
    },
    methods:{
        changename:function(){
            this.name="tom";
        }
    }
})

new Vue({
    el: '#vue-app-1'
});
new Vue({
    el: '#vue-app-2'

});

