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
      <Path d="M19 20 10 4" stroke={`${color}`} />
      <Path d="m5 20 9-16" stroke={`${color}`} />
      <Path d="M3 20h18" stroke={`${color}`} />
      <Path d="m12 15-3 5" stroke={`${color}`} />
      <Path d="m12 15 3 5" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Tent'

export const Tent = memo<IconProps>(themed(Icon))
