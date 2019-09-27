import React from 'react'
import { useState, Fragment } from '@wordpress/element'
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor'
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
} from '@wordpress/components'
import './GutenbergProvider.css'

/* eslint-disable no-restricted-syntax */
import '@wordpress/components/build-style/style.css'
import '@wordpress/block-editor/build-style/style.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/editor.css'
import '@wordpress/block-library/build-style/theme.css'
/* eslint-enable no-restricted-syntax */

export function GutenbergProvider(props) {
  const { children } = props
  const [blocks, updateBlocks] = useState([])

  return (
    <Fragment>
      <SlotFillProvider>
        <DropZoneProvider>
          <BlockEditorProvider
            value={blocks}
            onInput={updateBlocks}
            onChange={updateBlocks}
          >
            <div className="editor-styles-wrapper">
              <BlockEditorKeyboardShortcuts />
              <WritingFlow>
                <ObserveTyping>{children}</ObserveTyping>
              </WritingFlow>
            </div>
            <Popover.Slot />
          </BlockEditorProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </Fragment>
  )
}

export const withGutenbergProvider = storyFn => (
  <GutenbergProvider>{storyFn()}</GutenbergProvider>
)

export default GutenbergProvider
