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
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
