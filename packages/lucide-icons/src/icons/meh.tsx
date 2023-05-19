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
      <_Circle cx="12" cy="12" r="10" stroke={`${color}`} />
      <Line x1="8" x2="16" y1="15" y2="15" stroke={`${color}`} />
      <Line x1="9" x2="9.01" y1="9" y2="9" stroke={`${color}`} />
      <Line x1="15" x2="15.01" y1="9" y2="9" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Meh'

export const Meh = memo<IconProps>(themed(Icon))
