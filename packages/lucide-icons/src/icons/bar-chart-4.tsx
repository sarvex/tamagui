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
      <Path d="M3 3v18h18" stroke={`${color}`} />
      <Path d="M13 17V9" stroke={`${color}`} />
      <Path d="M18 17V5" stroke={`${color}`} />
      <Path d="M8 17v-3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'BarChart4'

export const BarChart4 = memo<IconProps>(themed(Icon))
