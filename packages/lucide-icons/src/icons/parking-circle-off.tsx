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
      <_Circle cx="12" cy="12" r="10" stroke={`${color}`} />
      <Path d="m5 5 14 14" stroke={`${color}`} />
      <Path d="M13 13a3 3 0 1 0 0-6H9v2" stroke={`${color}`} />
      <Path d="M9 17v-2.34" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ParkingCircleOff'

export const ParkingCircleOff = memo<IconProps>(themed(Icon))
