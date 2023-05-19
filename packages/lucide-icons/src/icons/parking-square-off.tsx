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
      <Path
        d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
        stroke={`${color}`}
      />
      <Path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" stroke={`${color}`} />
      <Path d="m2 2 20 20" stroke={`${color}`} />
      <Path d="M13 13a3 3 0 1 0 0-6H9v2" stroke={`${color}`} />
      <Path d="M9 17v-2.3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ParkingSquareOff'

export const ParkingSquareOff = memo<IconProps>(themed(Icon))
