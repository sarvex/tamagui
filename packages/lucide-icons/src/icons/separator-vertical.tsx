import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Line x1="12" x2="12" y1="3" y2="21" stroke={`${color}`} />
      <Polyline points="8 8 4 12 8 16" stroke={`${color}`} />
      <Polyline points="16 16 20 12 16 8" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'SeparatorVertical'

export const SeparatorVertical = memo<IconProps>(themed(Icon))
