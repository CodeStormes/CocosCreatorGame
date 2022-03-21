// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
    },


     onLoad () {},

    start () {

    },

     update (dt) {
         if(!this.player) return;
         let pos_w = this.player.convertToWorldSpaceAR(cc.v2(1000,800));
         let pos_n = this.node.parent.convertToNodeSpaceAR(pos_w);
         this.node.position = pos_n;
     },
});
