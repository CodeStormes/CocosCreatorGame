// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
          distance:0,
          speed:20,
          loca:0,
        },
    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.walkAction = this.onWalk();
        this.node.runAction(this.walkAction);
     },
    onWalk(){
           var walk1 = cc.moveBy(this.speed,cc.v2(this.distance,0));
           var walk2 = cc.moveBy(this.speed,cc.v2(-this.distance,0));
           return cc.repeatForever(cc.sequence(walk1,walk2));
    },
    update(dt){
        var action = cc.flipX(true);
        if(this.node.x-this.loca==this.distance){
              this.node.runAction(action);
        }else if(this.node.x!=0&&this.node.x-this.distance==0){
              this.node.runAction(action);
        }
    }
});
