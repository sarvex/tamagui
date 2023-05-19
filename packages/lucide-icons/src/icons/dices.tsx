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
        width="12"
        height="12"
        x="2"
        y="10"
        rx="2"
        ry="2"
        stroke={`${color}`}
      />
      <Path
        d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
        stroke={`${color}`}
      />
      <Path d="M6 18h.01" stroke={`${color}`} />
      <Path d="M10 14h.01" stroke={`${color}`} />
      <Path d="M15 6h.01" stroke={`${color}`} />
      <Path d="M18 9h.01" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Dices'

export const Dices = memo<IconProps>(themed(Icon))
