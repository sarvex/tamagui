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
      <Path d="M5 3v16h16" stroke={`${color}`} />
      <Path d="m5 19 6-6" stroke={`${color}`} />
      <Path d="m2 6 3-3 3 3" stroke={`${color}`} />
      <Path d="m18 16 3 3-3 3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Move3d'

export const Move3d = memo<IconProps>(themed(Icon))
