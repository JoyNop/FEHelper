new Vue ({
    el:'#keyevents',
    data:{
        Name:"",
        Age:""

    },
    methods:{
        logName:function(){
            console.log("你正在输入名字");
            this.Name=this.$refs._Name.value;
        },
        logAge:function(){
            console.log("你正在输入年龄")
            this.Age=this.$refs._Age.value;
        }
    }
})