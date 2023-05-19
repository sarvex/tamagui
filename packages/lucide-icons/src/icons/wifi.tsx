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
      <Path d="M5 13a10 10 0 0 1 14 0" stroke={`${color}`} />
      <Path d="M8.5 16.5a5 5 0 0 1 7 0" stroke={`${color}`} />
      <Path d="M2 8.82a15 15 0 0 1 20 0" stroke={`${color}`} />
      <Line x1="12" x2="12.01" y1="20" y2="20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Wifi'

export const Wifi = memo<IconProps>(themed(Icon))
