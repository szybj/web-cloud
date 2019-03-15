import contentBlock from 'components/contentBlock'
import orangeTable from 'components/orangeTable'
import orangeForm from 'components/orangeForm'
import orangeCascader from 'components/orangeCascader'
import orangeSelect from 'components/orangeSelect'
import orangeInput from 'components/orangeInput'
import orangeDate from 'components/orangeDate'
import orangePagination from 'components/orangePagination'
import orangeTabs from 'components/orangeTabs'
import detailsTable from 'components/detailsTable'
import siderbar from 'components/siderbar/siderbar'
import siderbarPane from 'components/siderbar/siderbarPane'

const components = [
  contentBlock,
  orangeTable,
  orangeForm,
  orangeCascader,
  orangeSelect,
  orangeInput,
  orangeDate,
  orangePagination,
  orangeTabs,
  detailsTable,
  siderbar,
  siderbarPane
]
function install (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
  contentBlock,
  orangeTable,
  orangeForm,
  orangeCascader,
  orangeSelect,
  orangeInput,
  orangeDate,
  orangePagination,
  orangeTabs,
  detailsTable,
  siderbar,
  siderbarPane
}

