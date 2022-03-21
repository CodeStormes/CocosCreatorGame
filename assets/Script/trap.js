// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
         Props_1:{
             type:cc.Prefab,
             default:null,
         },
         Props_2:{
            type:cc.Prefab,
            default:null,
        },
        Props_3:{
            type:cc.Prefab,
            default:null,
        },
        Props_4:{
            type:cc.Prefab,
            default:null,
        },
        Props_5:{
            type:cc.Prefab,
            default:null,
        },
        Props_6:{
            type:cc.Prefab,
            default:null,
        },
        level:{
            type:cc.Prefab,
            default:null,
        },
        star:{
            type:cc.Prefab,
            default:null,
        },
        cap:{
            type:cc.Prefab,
            default:null,
        },
        light:{
            type:cc.Prefab,
            default:null,
        }
    },

    onLoad () {
           var manager = cc.director.getCollisionManager();
           manager.enabled = true;
           this.buildWall();
           this.trapBuild();
           this.garbage();
           this.monkey();
           this.levelBuilder();
           this.staring();
    },
    levelBuilder(){
        for(let i=0;i<5;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(1850+70*i,-54.172));
    }
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(2200+70*i,150));
        }
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(2500+70*i,300));
        }
        for(let i=0;i<15;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(3600+70*i,500));
        }
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(5400+70*i,300));
        } 
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(9000+70*i,300));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(9900+70*i,500));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(9450+70*i,100));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(10500,800));
        } 
        for(let i=0;i<4;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(15000+70*i,110));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(15800+7*i,300));
        }
        for(let i=0;i<30;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(16500+70*i,550));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(18750,110));
        } 
        for(let i=0;i<5;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(21000,-254.172+70*i));
        }
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(28300,110));
        }
        for(let i=0;i<3;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(27800,300));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.level);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(28500,610));
        }
    },
    buildWall:function(){
        for(let i=0;i<15;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(800+20*i,-264.172));
    }
    for(let i=0;i<30;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(4000+20*i,-264.172));
    }
    for(let i=0;i<5;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(11500+300*i,-254.172));
    }
    for(let i=0;i<35;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(18400+20*i,-254.172));
    }
    for(let i=0;i<35;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(23000+20*i,-254.172));
    }
    for(let i=0;i<35;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(24100+20*i,-254.172));
    }
    for(let i=0;i<35;i++){
        var newProps = cc.instantiate(this.Props_4);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(25300+20*i,-254.172));
    }
},
    trapBuild(){
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.Props_1);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(2000,-254.172));
        }        
         for(let i=0;i<4;i++){
          var newProps = cc.instantiate(this.Props_1);
          this.node.addChild(newProps);
          newProps.setPosition(cc.v2(4700+120*i,-254.172));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.Props_1);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(11950+600*i,-254.172));
        }
        for(let i=0;i<4;i++){
            var newProps = cc.instantiate(this.Props_1);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(19300+120*i,-254.172));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.Props_1);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(23900,-254.172));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.Props_1);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(25050,-254.172));
        }
    },
    garbage(){
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.Props_2);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(1500,-254.172));
}
         for(let i=0;i<1;i++){
         var newProps = cc.instantiate(this.Props_2);
         this.node.addChild(newProps);
         newProps.setPosition(cc.v2(4200,-170.172));
}
         for(let i=0;i<1;i++){
         var newProps = cc.instantiate(this.Props_2);
         this.node.addChild(newProps);
         newProps.setPosition(cc.v2(8279,-254.172));
}
    },
    monkey(){
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.Props_3);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(13100+400*i,-254.172));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.Props_3);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(18750,-170.172));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.Props_3);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(21000,370));
        }
    },
    staring(){
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.star);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(4100,800));
        }       
        for(let i=0;i<1;i++){
        var newProps = cc.instantiate(this.star);
        this.node.addChild(newProps);
        newProps.setPosition(cc.v2(11100,580));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.star);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(19150,430));
        }
        for(let i=0;i<1;i++){
            var newProps = cc.instantiate(this.star);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(29000,325));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.star);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(38800,120));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.cap);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(48500,120));
        }
        for(let i=0;i<2;i++){
            var newProps = cc.instantiate(this.light);
            this.node.addChild(newProps);
            newProps.setPosition(cc.v2(55000,120));
        }
    },
    Random(min,max) {
        return Math.floor(Math.random() * (max - min)) + min;
   },
   onCollisionEnter:function(other,self){
    //other.getComponent(cc.Animation).playAdditive('down');
    this.node.destroy();
},
});
