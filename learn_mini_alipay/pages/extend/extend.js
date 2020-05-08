Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onContainer(){
    my.navigateTo({url:'../extend/container/container'});
  },
  onTitle(){
    my.navigateTo({url:'../extend/title/title'});
  },
  onList(){
    my.navigateTo({url:'../extend/list/list'});
  },
  onListItem(){
    my.navigateTo({url:'../extend/list-item/list-item'});
  },
  onListSecondary(){
    my.navigateTo({url:'../extend/list-secondary/list-secondary'});
  },
  onTabs(){
    my.navigateTo({url:'../extend/tabs/tabs'});
  },
  onVTabs(){
    my.navigateTo({url:'../extend/vTabs/vTabs'});
  },
  onCard(){
    my.navigateTo({url:'../extend/card/card'});
  },
  onCoupon() {
    my.navigateTo({url:'../extend/coupon/coupon'});
  },
  onGrid() {
    my.navigateTo({url:'../extend/grid/grid'});
  },
  onSteps(){
    my.navigateTo({url:'../extend/steps/steps'});
  },
  onFooter(){
    my.navigateTo({url:'../extend/footer/footer'});
  },
  onTerms(){
    my.navigateTo({url:'../extend/terms/terms'});
  },
  onFlex(){
    my.navigateTo({url:'../extend/flex/flex'});
  },
  onCollapse(){
    my.navigateTo({url:'../extend/collapse/collapse'});
  },
  onPopover(){
    my.navigateTo({url:'../extend/popover/popover'});
  },
  onFilter(){
    my.navigateTo({url:'../extend/filter/filter'});
  },
  onModal(){
    my.navigateTo({url:'../extend/modal/modal'});
  },
  onPopup(){
    my.navigateTo({url:'../extend/popup/popup'});
  },
  onPageResult(){
    my.navigateTo({url:'../extend/page-result/page-result'});
  },
  onMessage(){
    my.navigateTo({url:'../extend/message/message'});
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
