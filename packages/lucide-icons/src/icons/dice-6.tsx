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
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
        stroke={`${color}`}
      />
      <Path d="M16 8h.01" stroke={`${color}`} />
      <Path d="M16 12h.01" stroke={`${color}`} />
      <Path d="M16 16h.01" stroke={`${color}`} />
      <Path d="M8 8h.01" stroke={`${color}`} />
      <Path d="M8 12h.01" stroke={`${color}`} />
      <Path d="M8 16h.01" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Dice6'

export const Dice6 = memo<IconProps>(themed(Icon))
