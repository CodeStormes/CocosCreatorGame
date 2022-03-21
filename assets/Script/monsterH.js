// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        distance:600,
        speed:20,
      },
  onLoad () {
      var manager = cc.director.getCollisionManager();
      manager.enabled = true;
      this.Jump = this.onJump();
      this.node.runAction(this.Jump);
   },
  onJump(){
         var height1 = cc.moveBy(this.speed,cc.v2(0,this.distance));
         var height2 = cc.moveBy(this.speed,cc.v2(0,-this.distance));
         return cc.repeatForever(cc.sequence(height1,height2));
  }
});
