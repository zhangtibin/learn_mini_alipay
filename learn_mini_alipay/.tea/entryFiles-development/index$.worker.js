if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/list/auto-size-img/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-item/index?hash=a5465b8c889360e3f854461d3ac41cf414aec633');
require('../../node_modules/mini-ali-ui/es/container/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/title/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/list/alphabet/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-secondary/index?hash=f75be69226a587e5ccc990c4b63309fd714f1354');
require('../../node_modules/mini-ali-ui/es/tag/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/am-switch/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-radio/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/input-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/vtabs/index?hash=8b610b99cb09aec3e648972838092b2b24db30c0');
require('../../node_modules/mini-ali-ui/es/vtabs/vtab-content/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/view_container/view_container?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/swiper/swiper?hash=47210a17c63210b43522855ebfc966f3191398eb');
require('../../pages/scroll-view/scroll-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cover-view/cover-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cover-image/cover-image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/movable-view/movable-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/movable-area/movable-area?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/text/text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/icon/icon?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/progress-view/progress-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/rich-text/rich-text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/button/button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form/form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/label/label?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/textarea/textarea?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/radio/radio?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/radio-group/radio-group?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/switch/switch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/slider/slider?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/picker-view/picker-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/navigator/navigator?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/navigator/navigate/navigate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/navigator/reLaunch/reLaunch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/navigator/redirect/redirect?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/media-image/media-image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/media-video/media-video?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/canvas/canvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/extend/extend?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/extend/container/container?hash=b3c00e752e7ec314af9579f9179a32a834e699b3');
require('../../pages/extend/title/title?hash=c9a7529957ce4324abe0bf8c68349021d04b8326');
require('../../pages/extend/list/list?hash=6afb217eadccd1c4e8bfda0d0b7fb88324ecf08f');
require('../../pages/extend/list-item/list-item?hash=1618869d18fe6fbea7737996ba7613c72dfeb4b4');
require('../../pages/extend/list-secondary/list-secondary?hash=a65fcaad1d19b0193d1041447ce6a51c4ef81bc6');
require('../../pages/extend/tabs/tabs?hash=84ab3c59a0b72e3104e9cc541477ed9d8e62d692');
require('../../pages/extend/vTabs/vTabs?hash=2296ef389944d9bd871f757f80fab9d2827ec014');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}