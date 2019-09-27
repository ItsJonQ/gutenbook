import React from 'react'
import styled from 'styled-components'
import { GutenbergProvider } from './GutenbergProvider'

const { InspectorControls } = wp.blockEditor

export function RenderBlock(props) {
  const [attributes, __setAttributes] = React.useState({})
  const { block, className } = props
  const { name } = block

  const setAttributes = nextAttributes => {
    __setAttributes({ ...attributes, ...nextAttributes })
  }

  const blockProps = { attributes, setAttributes }

  return (
    <GutenbergProvider>
      <Frame>
        <TopBar>
          <strong>Block:</strong> {name}
        </TopBar>
        <PaneWrapper>
          <Pane>
            <Label>Edit View</Label>
            <div className={className}>
              <block.edit {...blockProps} />
            </div>
          </Pane>
          <Pane>
            <Label>Save View</Label>
            <div className={className}>
              <block.save {...blockProps} />
            </div>
          </Pane>
        </PaneWrapper>
        <div className="Sidebar">
          <div className="Tabbar">
            <button>Document</button>
            <button className="is-active">Block</button>
          </div>
          <div className="SidebarBlock">
            <InspectorControls.Slot>
              {slotProps => {
                if (!slotProps.length) {
                  return <NoBlocks>No block controls.</NoBlocks>
                }

                return slotProps
              }}
            </InspectorControls.Slot>
          </div>
        </div>
      </Frame>
    </GutenbergProvider>
  )
}

const Frame = styled.div`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  * {
    box-sizing: border-box;
  }

  .Sidebar {
    width: 300px;
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 0;
    border-left: 1px solid #ddd;
  }

  .SidebarBlock {
    padding: 16px;
    overflow-y: auto;
  }

  .Tabbar {
    background: #f3f4f5;
    border-bottom: 1px solid #ddd;

    button {
      background: transparent;
      border: none;
      color: #191e23;
      cursor: pointer;
      font-size: 13px;
      font-weight: 400;
      height: 50px;
      margin-left: 0;
      outline-offset: -1px;
      outline: none;
      padding: 3px 15px;
      pointer-events: none;
      position: relative;
      transition: box-shadow 0.1s linear;

      &.is-active {
        box-shadow: inset 0 -3px #007cba;
        font-weight: 600;
      }
    }
  }
`

const TopBar = styled.div`
  height: 50px;
  padding: 8px 20px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  display: flex;
  font-size: 13px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.06);

  strong {
    opacity: 0.4;
    margin-right: 8px;
  }
`

const Pane = styled.div`
  flex: 1;
  padding: 48px 32px;
  max-width: calc(100% / 2);
  position: relative;
  overflow-y: auto;

  & + * {
    border-left: 1px solid #ddd;
  }
`

const PaneWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 300px;
`

const Label = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 10px;
  text-transform: uppercase;
  opacity: 0.4;
`

const NoBlocks = styled.div`
  display: block;
  font-size: 13px;
  background: #fff;
  padding: 32px 16px;
  text-align: center;
  opacity: 0.4;
`

export default RenderBlock
