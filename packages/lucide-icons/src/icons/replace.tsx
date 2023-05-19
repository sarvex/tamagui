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
      <Path d="M14 4c0-1.1.9-2 2-2" stroke={`${color}`} />
      <Path d="M20 2c1.1 0 2 .9 2 2" stroke={`${color}`} />
      <Path d="M22 8c0 1.1-.9 2-2 2" stroke={`${color}`} />
      <Path d="M16 10c-1.1 0-2-.9-2-2" stroke={`${color}`} />
      <Path d="m3 7 3 3 3-3" stroke={`${color}`} />
      <Path d="M6 10V5c0-1.7 1.3-3 3-3h1" stroke={`${color}`} />
      <Rect width="8" height="8" x="2" y="14" rx="2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Replace'

export const Replace = memo<IconProps>(themed(Icon))
