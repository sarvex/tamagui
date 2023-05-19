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
      <Path d="M17 8h1a4 4 0 1 1 0 8h-1" stroke={`${color}`} />
      <Path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" stroke={`${color}`} />
      <Line x1="6" x2="6" y1="2" y2="4" stroke={`${color}`} />
      <Line x1="10" x2="10" y1="2" y2="4" stroke={`${color}`} />
      <Line x1="14" x2="14" y1="2" y2="4" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Coffee'

export const Coffee = memo<IconProps>(themed(Icon))
