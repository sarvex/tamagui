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
      <Path d="M8 2c3 0 5 2 8 2s4-1 4-1v11" stroke={`${color}`} />
      <Path d="M4 22V4" stroke={`${color}`} />
      <Path d="M4 15s1-1 4-1 5 2 8 2" stroke={`${color}`} />
      <Line x1="2" x2="22" y1="2" y2="22" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'FlagOff'

export const FlagOff = memo<IconProps>(themed(Icon))
