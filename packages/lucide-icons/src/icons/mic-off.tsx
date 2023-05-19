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
      <Line x1="2" x2="22" y1="2" y2="22" stroke={`${color}`} />
      <Path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" stroke={`${color}`} />
      <Path d="M5 10v2a7 7 0 0 0 12 5" stroke={`${color}`} />
      <Path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" stroke={`${color}`} />
      <Path d="M9 9v3a3 3 0 0 0 5.12 2.12" stroke={`${color}`} />
      <Line x1="12" x2="12" y1="19" y2="22" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'MicOff'

export const MicOff = memo<IconProps>(themed(Icon))
