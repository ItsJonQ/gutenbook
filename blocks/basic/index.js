import './styles/editor.scss'
import './styles/style.scss'

import metadata from './block.json'
import edit from './edit'
import save from './save'

const { __, _x } = wp.i18n

const { name, category, attributes } = metadata

const settings = {
  title: _x('Basic', 'block title'),
  description: __('Does basic things'),
  icon: 'shield',
  keywords: [_x('basic', 'block keyword')],
  supports: {
    align: ['wide', 'full'],
    html: false,
  },
  attributes,
  edit,
  save,
}

export default { ...settings, name }
