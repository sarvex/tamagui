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
      <Path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" stroke={`${color}`} />
      <Path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" stroke={`${color}`} />
      <Path d="M4 12H2" stroke={`${color}`} />
      <Path d="M10 12H8" stroke={`${color}`} />
      <Path d="M16 12h-2" stroke={`${color}`} />
      <Path d="M22 12h-2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'FlipVertical'

export const FlipVertical = memo<IconProps>(themed(Icon))
