<script>
  import siderbarNav from './siderbarNav'
  export default {
    name: 'siderbar',
    model: {
      prop: 'activeName',
      event: 'change',
    },
    props: {
      position: {
        type: String,
        default: 'right'
      },
      navActiveColor: {
        type: String,
        default: ''
      },
      activeName: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '400'
      },
      top: {
        type: String,
        default: '0'
      },
      bottom: {
        type: String,
        default: '0'
      },
      navWidth: {
        type: String,
        default: '40'
      },
      height: {
        type: String,
        default: '400'
      },
      borderColor: {
        type: String,
        default: '#01c6dd'
      },
      navBackgroundColor: {
        type: String,
        default: '#01c6dd'
      }
    },
    computed: {
      navStyles () {
        let defaultStyle = {
          width: `${this.navWidth}px`,
          background: this.navBackgroundColor
        }
        let positionStyle = {}
        if (this.position === 'left') {
          positionStyle = {
            right: 0
          }
        }
        if (this.position === 'bottom') {
          positionStyle = {
            width:`${this.width}px`,
            height: `${this.navWidth}px`
          }
        }
        return Object.assign({}, defaultStyle, positionStyle)
      },
      warpStyle () {
        let defaultStyle = {
          width:`${this.width}px`,
          zIndex: 10000,
          height: this.height === '100%' ? this.height : `${parseInt(this.height)}px`,
          borderColor: this.borderColor,
          position: 'absolute'
        }
        let positionStyle = {
          borderLeft: 'none',
          right: this.currentName ? 0 : `-${this.width - this.navWidth}px`,
          top: `${this.top}px`
        }
        if (this.position === 'left') {
          positionStyle = {
            borderRight: 'none',
            left: this.currentName ? 0 : `-${this.width - this.navWidth}px`,
            top: `${this.top}px`
          }
        }
        if (this.position === 'bottom') {
          let num = parseInt(this.width - this.navWidth) - parseInt(this.bottom)
          positionStyle = {
            borderTop: 'none',
            bottom: this.currentName ? 0 : `-${num > 0 ? num : - num}px`,
          }
        }
        return Object.assign({}, defaultStyle, positionStyle)
      },
      contentStyle () {
        let defaultStyle = {
          width: `${this.width - this.navWidth - 2}px`
        }
        let positionStyle = {
          right: 0
        }
        if (this.position === 'left') {
          positionStyle = {
            left: 0
          }
        }
        if (this.position === 'bottom') {
          positionStyle = {
            top: `${this.navWidth}px`,
            height: `${parseInt(this.height) - this.navWidth - 2}px`,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        }
        return Object.assign({}, defaultStyle, positionStyle)
      },
      closeIconStyle () {
        let defaultStyle = {
          left: '4px'
        }
        if (this.position === 'left') {
          defaultStyle = {
            right: '4px',
            transform: 'rotate(180deg)'
          }
        }
        if (this.position === 'bottom') {
          defaultStyle = {
            right: '4px',
            transform: 'rotate(90deg)'
          }
        }
        return Object.assign({}, defaultStyle)
      }
    },
    data () {
      return {
        title: '',
        currentName: this.activeName,
        panes: []
      }
    },
    components: {
      siderbarNav
    },
    methods: {
      calcPaneInstances() {
        if (this.$slots.default) {
          const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
            vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'siderbarPane');
          // update indeed
          const panes = paneSlots.map(({ componentInstance }) => componentInstance);
          if (!(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]))) {
            this.panes = panes;
          }
        } else if (this.panes.length !== 0) {
          this.panes = [];
        }
      },
      handleTabClick(pane, paneName, event) {
        if (pane.disabled) return;
        this.setCurrentName(paneName);
        this.active(pane)
      },
      setCurrentName(value) {
        const changeCurrentName = () => {
          this.currentName = value;
        };
        if (this.currentName !== value && this.beforeLeave) {
          const before = this.beforeLeave(value, this.currentName);
          if (before && before.then) {
            before.then(() => {
              changeCurrentName();
              this.$refs.nav && this.$refs.nav.removeFocus();
            });
          } else if (before !== false) {
            changeCurrentName();
          }
        } else {
          changeCurrentName();
        }
      },
      doc () {
        let _this = this
        document.onclick = function (ev) {
          _this.close()
        }
      },
      stopPropagation (e) {
        e.preventDefault();
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
      },
      active (pane) {
        this.title = pane.label || pane.name || pane.index
      },
      close () {
        this.currentName = ''
        this.title = ''
      }
    },
    render () {
      let {
        title,
        panes,
        active,
        handleTabClick,
        navActiveColor,
        position,
        width,
        navWidth,
        warpStyle,
        contentStyle,
        closeIconStyle,
        navStyles
      } = this
      const navData = {
        props: {
          panes,
          paneClick: handleTabClick,
          position,
          navActiveColor,
          navWidth: parseInt(navWidth)
        }
      }
      let nav_horizontal = position === 'left' || position === 'right'
      return (
        <div class={'siderbar_wrap'}
          style={warpStyle}
          on-click={(e) => {this.stopPropagation(e)}}
        >
          <div class={{
            'nav_horizontal': nav_horizontal,
          }} style={navStyles}>
            <siderbarNav {...navData} />
          </div>
          <div class={"siderbar_content"} style={contentStyle}>
            <div class={"title"}>
              <i style={closeIconStyle} on-click={() => this.close()} class={"icon iconfont icon-iconfonthaofang26-copy-copy-copy toggle_icon"}></i>
              {title}
            </div>
            <div class={"siderbar_content_wrap"}>
              {this.$slots.default}
            </div>
          </div>
        </div>
      )
    },
    updated() {
      this.calcPaneInstances();
    },
    mounted () {
      this.doc()
      this.calcPaneInstances()
    },
    watch: {
      activeName (newName) {
        console.log('newName', newName)
        this.setCurrentName(newName)
      }
    }
  }
</script>
<style>
.siderbar_wrap {
  transition: all 0.5s;
  box-sizing: border-box;
  display: flex;
  border: 2px solid;
}
.nav_horizontal {
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
}
.siderbar_content {
  height: 100%;
  background: #fff;
  position: absolute;
  overflow: hidden;
}
.siderbar_content .siderbar_content_wrap::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  background-color: #F5F5F5;
}
 /*定义滚动条轨道 内阴影+圆角*/
.siderbar_content .siderbar_content_wrap::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
.siderbar_content .siderbar_content_wrap::-webkit-scrollbar-thumb{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: rgba(32,160,255,0.1);
}
.siderbar_content .title{
  text-align: center;
  height: 30px;
  line-height: 30px;
  position: relative;
  border-bottom: 1px solid #000;
  z-index:1
}
.siderbar_content .toggle_icon {
  position: absolute;
  cursor: pointer;
}
.siderbar_content_wrap {
  padding: 10px;
  height: 100%;
  overflow: auto;
}
</style>

