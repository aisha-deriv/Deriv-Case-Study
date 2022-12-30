module.exports = {
    name:"trader",
    actions:{
        random(){
            return Math.round(Math.random()*10);
        }
    },
    events:{
        "hello.called"(payload){
            this.logger.info("trader service caught an event");
            this.logger.info(payload);
        }
    }
};