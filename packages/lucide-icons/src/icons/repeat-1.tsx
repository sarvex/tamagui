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
      <Path d="m17 2 4 4-4 4" stroke={`${color}`} />
      <Path d="M3 11v-1a4 4 0 0 1 4-4h14" stroke={`${color}`} />
      <Path d="m7 22-4-4 4-4" stroke={`${color}`} />
      <Path d="M21 13v1a4 4 0 0 1-4 4H3" stroke={`${color}`} />
      <Path d="M11 10h1v4" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Repeat1'

export const Repeat1 = memo<IconProps>(themed(Icon))
