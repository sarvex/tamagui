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
      <Line x1="12" x2="12" y1="8" y2="12" stroke={`${color}`} />
      <Line x1="12" x2="12.01" y1="16" y2="16" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'AlertCircle'

export const AlertCircle = memo<IconProps>(themed(Icon))
