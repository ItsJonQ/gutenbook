import React from 'react'
import { RenderBlock } from 'gutenbook'
import block from './index'

const { InspectorControls, RichText } = wp.blockEditor

export default {
  title: 'Basic',
}

export const toStorybook = () => {
  return <RenderBlock block={block} />
}

toStorybook.story = {
  name: 'RichText',
}
