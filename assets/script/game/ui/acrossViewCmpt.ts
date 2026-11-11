import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { BaseViewCmpt } from '../../components/baseViewCmpt';
import { ViewName } from '../../const/viewNameConst';
import { App } from '../../core/app';
@ccclass('acrossViewCmpt')
export class acrossViewCmpt extends BaseViewCmpt {
    onLoad() {
        super.onLoad();
    }
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
    loadExtraData() {
        App.view.closeView(ViewName.Single.eLoadingView);

    }
    onClick_startBtn() {
        App.view.openView(ViewName.Single.eHomeView);
    }
}


