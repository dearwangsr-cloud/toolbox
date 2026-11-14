/**
 * 工具箱配置
 * id:   工具目录名（对应 tools/<id>/）
 * name: 显示名称
 * desc: 一句话说明（可留空）
 * icon: 图标路径（可选，默认 tools/<id>/icon.svg）
 * url:  入口地址（可选，默认 tools/<id>/index.html）
 */
window.TOOLS = [
  {
    id: 'tool-a',
    name: '孕期记录',
    desc: '记录孕期信息，告诉你要做什么',
    icon: 'tools/tool-a/icon.svg',
    url: 'tools/tool-a/index.html'
  },
  {
    id: 'tool-b',
    name: '购物价格记录',
    desc: '另一个小工具',
    icon: 'tools/tool-b/icon.svg',
    url: 'tools/tool-b/index.html'
  }
];
