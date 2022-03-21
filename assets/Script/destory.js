// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },
  onLoad(){
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  onCollisionEnter:function(other,self){
       //other.getComponent(cc.Animation).playAdditive('down');
       if(other.tag==5){
       this.node.destroy();
      }
  },
});
