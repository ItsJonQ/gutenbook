import React from 'react'
import Card from './Card'

const { Fragment } = wp.element
const { InspectorControls, RichText } = wp.blockEditor

export default function edit({ attributes, setAttributes }) {
  const { text, title } = attributes
  return (
    <Fragment>
      <Card
        title={
          <RichText
            tagName="h1"
            value={title}
            onChange={value => setAttributes({ title: value })}
            placeholder="Title"
          />
        }
        content={
          <RichText
            value={text}
            onChange={value => setAttributes({ text: value })}
            placeholder="Content is poetry..."
          />
        }
      ></Card>
      <InspectorControls>
        <div>Custom Block inspector controls</div>
      </InspectorControls>
    </Fragment>
  )
}
