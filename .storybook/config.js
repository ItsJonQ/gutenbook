import { configure } from '@storybook/react'
import * as i18n from '@wordpress/i18n'
import * as blocks from '@wordpress/blocks'
import * as blockEditor from '@wordpress/block-editor'
import * as compose from '@wordpress/compose'
import * as components from '@wordpress/components'
import * as element from '@wordpress/element'
import * as data from '@wordpress/data'

import { registerCoreBlocks } from '@wordpress/block-library'

import registry from '@wordpress/data/build/default-registry'
import InspectorControls from './InspectorControls'

import '@wordpress/block-editor/build-style/style.css'
import '@wordpress/components/build-style/style.css'

if (!window.__didRegister) {
  registerCoreBlocks()
  window.__didRegister = true
}

window.wp = {
  i18n,
  blocks,
  blockEditor: {
    ...blockEditor,
    InspectorControls,
  },
  element,
  components,
  data,
  compose,
  registry,
}

// automatically import all files ending in *.stories.js
configure(require.context('../blocks', true, /\.stories\.js$/), module)
