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
require('../../node_modules/mini-ali-ui/es/card/index?hash=8c77e86e89c40c5b2ab9f0f22cf86a6245babc59');
require('../../node_modules/mini-ali-ui/es/coupon/index?hash=8c77e86e89c40c5b2ab9f0f22cf86a6245babc59');
require('../../node_modules/mini-ali-ui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/stepper/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/pagination/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/grid/index?hash=45fe1418d25fc81c09eccb62e0568b7faa62b362');
require('../../node_modules/mini-ali-ui/es/steps/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/footer/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/terms/index?hash=4640cae333019b72d6048efaae42781fd5b8e6b5');
require('../../node_modules/mini-ali-ui/es/flex/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/flex/flex-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/collapse/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-ali-ui/es/collapse/collapse-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/popover/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/popover/popover-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/filter/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/filter/filter-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/modal/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/page-result/index?hash=d0576ccfd535a385248496d7543e622723df8261');
require('../../node_modules/mini-ali-ui/es/message/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
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
require('../../pages/extend/card/card?hash=bb6be94eeb1a277c746c1e9a0a8507e056c481bf');
require('../../pages/extend/coupon/coupon?hash=280018b78801a70159fb66bcbc5e627c2b38ba86');
require('../../pages/extend/grid/grid?hash=b317a9fd5ad132854a863a551c13d0dc2d95225e');
require('../../pages/extend/grid/2/2?hash=b8c48e15d1704e83c2ec16652c29410e71290ee4');
require('../../pages/extend/grid/3/3?hash=b8c48e15d1704e83c2ec16652c29410e71290ee4');
require('../../pages/extend/grid/4/4?hash=b8c48e15d1704e83c2ec16652c29410e71290ee4');
require('../../pages/extend/grid/5/5?hash=bfe16bd2962d81d753613dcb122f83416ba37d41');
require('../../pages/extend/steps/steps?hash=ce15ca314f4e2c41381f2fc690c0674c1f2a1284');
require('../../pages/extend/footer/footer?hash=4f37b8153d8cc873b272587329c9848cc827eada');
require('../../pages/extend/terms/terms?hash=1896fff3440da86702cfd7229d67d82a72533f89');
require('../../pages/extend/flex/flex?hash=5d86f384244ee40ea6500a270a121b3c10155863');
require('../../pages/extend/collapse/collapse?hash=58a5c807c870b679f8f2f354b19e04cb5a519a87');
require('../../pages/extend/popover/popover?hash=490c00a5c6a87b666b9e9d19a5b1063d2256321f');
require('../../pages/extend/filter/filter?hash=47210a17c63210b43522855ebfc966f3191398eb');
require('../../pages/extend/filter/alternative/alternative?hash=dbdc9d0e20c60b714c74963273797b8360a8908e');
require('../../pages/extend/filter/single/single?hash=dbdc9d0e20c60b714c74963273797b8360a8908e');
require('../../pages/extend/filter/single_1/single_1?hash=dbdc9d0e20c60b714c74963273797b8360a8908e');
require('../../pages/extend/filter/single_2/single_2?hash=dbdc9d0e20c60b714c74963273797b8360a8908e');
require('../../pages/extend/modal/modal?hash=ef78849018bf45d6005d25b062348602afb28b5f');
require('../../pages/extend/popup/popup?hash=436c167f82f36f09d71fbd106bb283607b26b1c3');
require('../../pages/extend/page-result/page-result?hash=47210a17c63210b43522855ebfc966f3191398eb');
require('../../pages/extend/page-result/busy/busy?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/empty/empty?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/error/error?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-busy/local-busy?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-empty/local-empty?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-error/local-error?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-logoff/local-logoff?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-network/local-network?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-payment/local-payment?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/local-redpacket/local-redpacket?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/log-off/log-off?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/network/network?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/payment/payment?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/page-result/redpacket/redpacket?hash=ca3bf2b6af70c7a002faa077295ac6ea3b726a40');
require('../../pages/extend/message/message?hash=c7f85906aacdfb84b5d50b0c474545b9172549ff');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}