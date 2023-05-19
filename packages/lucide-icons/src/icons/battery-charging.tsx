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
      <Path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" stroke={`${color}`} />
      <Path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" stroke={`${color}`} />
      <Path d="m11 7-3 5h4l-3 5" stroke={`${color}`} />
      <Line x1="22" x2="22" y1="11" y2="13" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'BatteryCharging'

export const BatteryCharging = memo<IconProps>(themed(Icon))
