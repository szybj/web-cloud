``` js
  首先引入组建，siderbar，siderbarPane；
  示例：
  <siderbar>
    <siderbarPane name="1" label="示例1">
        component/ any
    </siderbarPane>
    <siderbarPane name="2" label="示例2">
        component
    </siderbarPane>
  </siderbar>
```

``` 
基本属性prop
position: String, 组建位置默认right，可选left、bottom
navActiveColor: String，选中导航颜色
activeName: 默认展开
width: 组建整体宽度，
top: 距离顶部位置
bottom: 距离底部位置，定位为bottom时 使用
navWidth: 导航宽度，默认40
height: 导航高, 若定位为bottom时，默认400
borderColor: 组建边框颜色
navBackgroundColor: 导航栏背景颜色
```

```
paneProp
label: String, 导航标题，鼠标滑动，气泡展示内容，若无图片，icon；也是导航标题
name: String, pane位于标识，用于组建切换展示
src: String, 导航展示为图片，需使用require(src)
icon: String, 导航展示icon，icon(class名称)
```