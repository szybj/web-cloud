import contentBlock from 'components/contentBlock'
import orangeTable from 'components/orangeTable'
import orangeForm from 'components/orangeForm'
import orangeCascader from 'components/orangeCascader'
import orangeSelect from 'components/orangeSelect'
import orangeInput from 'components/orangeInput'
import orangeDate from 'components/orangeDate'
import orangePagination from 'components/orangePagination'

const components = [
  contentBlock,
  orangeTable,
  orangeForm,
  orangeCascader,
  orangeSelect,
  orangeInput,
  orangeDate,
  orangePagination
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
  orangePagination
}

