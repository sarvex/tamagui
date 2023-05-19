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
      <Path d="M21 4H3" stroke={`${color}`} />
      <Path d="M18 8H6" stroke={`${color}`} />
      <Path d="M19 12H9" stroke={`${color}`} />
      <Path d="M16 16h-6" stroke={`${color}`} />
      <Path d="M11 20H9" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Tornado'

export const Tornado = memo<IconProps>(themed(Icon))
