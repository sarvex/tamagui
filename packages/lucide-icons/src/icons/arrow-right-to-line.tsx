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
      <Line x1="17" x2="3" y1="12" y2="12" stroke={`${color}`} />
      <Polyline points="11 18 17 12 11 6" stroke={`${color}`} />
      <Path d="M21 5v14" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightToLine'

export const ArrowRightToLine = memo<IconProps>(themed(Icon))
