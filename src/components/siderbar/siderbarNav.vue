<script>
  export default {
    name: 'siderbarNav',
    props: {
      panes: Array,
      paneClick: Function,
      position: String,
      navWidth: Number,
      navActiveColor: String
    },
    computed: {
      navWrapStyle () {
        let defaultStyle = {
          flexDirection: 'column',
        }
        let positionStyle = {}
        if (this.position !== 'left' && this.position !== 'right') {
          positionStyle = {
            flexDirection: 'row'
          }
        } else {
          positionStyle = {
            height: 'auto'
          }
        }
        return Object.assign({}, defaultStyle, positionStyle)
      },
      navPaneStyle () {
        let defaultStyle = {
          width: `${this.navWidth}px`,
          height: `${this.navWidth}px`,
          lineHeight: `${this.navWidth}px`,
          margin:'5px 0'
        }
        let positionStyle = {}
        if (this.position !== 'left' && this.position !== 'right') {
          positionStyle = {
            margin: '0 5px'
          }
        }
        return Object.assign({}, defaultStyle, positionStyle)
      },
      tooltipP () {
        let postion = 'left'
        if (this.position === 'left') {
          postion = 'right'
        }
        if (this.position === 'bottom') {
          postion = 'top'
        }
        if (this.position === 'top') {
          postion = 'bottom'
        }
        return postion
      }
    },
    data () {
      return {
      }
    },
    components: {
    },
    mounted () {
    },
    methods: {
      active (pane, paneName, e) {
        e.preventDefault();
        this.paneClick && this.paneClick(pane, paneName)
      },
    },
    render () {
      const {panes, navPaneStyle, navWrapStyle, tooltipP} = this
      const tabs = panes.map((pane, index) => {
        let paneName = pane.name || pane.index || index;
        let background = this.navActiveColor ? {background: (pane.active && this.navActiveColor) || 'none'} : {}
        return (
          <el-tooltip class={`item_${index}`} effect="dark" content={pane.label || pane.name || pane.index} placement={tooltipP}>
            <span
              on-click={(e) => {this.active(pane, paneName, e)}}
              style={{...navPaneStyle, ...background}}
              class={{
                'siderbar_pane_nav': true,
                'is_actived_pane': pane.active,
                }}
              >
              {
                pane.src && <img class="nav_img" src={pane.src} alt=""/>
              }
              {
                pane.icon && <i class={pane.icon}></i>
              }
              {(!pane.src && !pane.icon) && (pane.label || pane.name)}
            </span>
          </el-tooltip>
        )
      })
      return (
        <div class={'nav_wrap'} style={navWrapStyle}>
          {tabs}
        </div>
      )
    },
    watch: {
      panes (newPanes) {
      }
    }
  }
</script>
<style>
.siderbar_pane_nav {
  text-align:center;
  display:block;
  cursor:pointer;
  position: relative;
}
.nav_wrap {
  display: flex;
  justify-content: center;
  /* position:absolute; */
  width:100%;
}
.is_actived_pane {
  background: red;
}
.nav_img {
  display: block;
  width: 25px;
  height: 25px;
  padding: 8px 10px;
}
</style>

