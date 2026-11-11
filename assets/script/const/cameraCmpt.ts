import { _decorator, Component, Node, Vec3, Camera } from 'cc';
import { BaseNodeCmpt } from '../components/baseNodeCmpt';
import { App } from '../core/app';
import { EventName } from './eventName';
const { ccclass, property } = _decorator;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
@ccclass('cameraCmpt')
export class cameraCmpt extends BaseNodeCmpt {

    private originPos: Vec3 = null;
    private offset: number = 5;

    onLoad() {
        super.onLoad();
        App.event.on(EventName.UI.MoveCarmera, this.evtMoveCarmera, this);
        this.originPos = this.node.getPosition();
        this.scheduleOnce(() => {
            // App.gameLogic.cameraCp = this.node.getComponent(Camera);
        }, 3);
    }

    evtMoveCarmera(percent: number) {
        let y = percent * this.offset;
        let v3 = new Vec3(this.originPos.x, this.originPos.y - y, this.originPos.z);
        this.node.setPosition(v3);
    }
}


