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
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}