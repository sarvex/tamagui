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
      <Line x1="3" x2="17" y1="12" y2="12" stroke={`${color}`} />
      <Polyline points="9 6 3 12 9 18" stroke={`${color}`} />
      <Path d="M21 19V5" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftFromLine'

export const ArrowLeftFromLine = memo<IconProps>(themed(Icon))
