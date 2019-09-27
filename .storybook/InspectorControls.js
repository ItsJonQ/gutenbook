import { createSlotFill } from '@wordpress/components'

const { Fill, Slot } = createSlotFill('InspectorControls')

const InspectorControls = Fill

InspectorControls.Slot = Slot

export default InspectorControls
