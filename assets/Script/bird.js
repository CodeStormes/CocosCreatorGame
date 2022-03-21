// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const Input = {};
cc.Class({
    extends: cc.Component,

    properties: {
           speed:0,
           jumpDuration:0,
           jumpHeight:0,
    },
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0,-100);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.sp = cc.v2(0,0);
        this.state = '';
        this.bird = this.node.getComponent(cc.Animation);
        cc.systemEvent.on('keydown',this.onKeyDown,this);
        cc.systemEvent.on('keyup',this.onKeyUp,this);
        cc.log(this.node.getPosition());
    },
    setJump:function(){
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        
        return cc.sequence(jumpUp, jumpDown);
    },
    setState(state){
        if(this.state ==state)return;
        this.state = state;
        this.bird.play(this.state);
    },
    update (dt) {
       if(Input[cc.macro.KEY.a]){
           this.sp.x = -1;
       }else if(Input[cc.macro.KEY.d]){
           this.sp.x = 1;
       }else{
           this.sp.x =0;
       }
       if(Input[cc.macro.KEY.d]&&Input[cc.macro.KEY.space]){
           this.sp.y = 1;
           this.jumpAction = this.setJump();
           this.node.runAction(this.jumpAction);
       }else if(Input[cc.macro.KEY.a]&&Input[cc.macro.KEY.space]){
           this.sp.y = -1;
           this.jumpAction = this.setJump();
           this.node.runAction(this.jumpAction);
       }else if(Input[cc.macro.KEY.space]){
           this.sp.y =2;
       }else{
           this.sp.y =0;
       }
       if(this.sp.x){
           this.node.x+=this.sp.x*this.speed*dt;
       }else if(this.sp.y==2||this.sp.y==-1||this.sp.y==1){
        this.jumpAction = this.setJump();
        this.node.runAction(this.jumpAction);
       }
       let state = '';
       if(this.sp.x ==1){
           state ='walk';
       }else if(this.sp.x==-1){
           state ='walkback';
       }if(this.sp.y ==1){
           state ='fly';
       }else if(this.sp.y ==-1){
           state ='flyback';
       }
       if(state){
           this.setState(state);
        }
    },   
    onKeyDown(e){
      Input[e.keyCode] = 1;
    },
    onKeyUp(e){
      Input[e.keyCode] = 0;
    },
    onCollisionEnter:function(other,self){
            var action = cc.blink(2,6);
            this.node.runAction(action);
        if(other.tag==1){
            cc.log(other.name);
            this.node.getChildByName("hp").getComponent(cc.Sprite).fillStart = 0; 
        }else if(other.tag==3){
            this.node.getChildByName("hp").getComponent(cc.Sprite).fillStart += 0.33;
        }
    },
});
