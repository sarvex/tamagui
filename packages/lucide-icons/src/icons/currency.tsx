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
      <_Circle cx="12" cy="12" r="8" stroke={`${color}`} />
      <Line x1="3" x2="6" y1="3" y2="6" stroke={`${color}`} />
      <Line x1="21" x2="18" y1="3" y2="6" stroke={`${color}`} />
      <Line x1="3" x2="6" y1="21" y2="18" stroke={`${color}`} />
      <Line x1="21" x2="18" y1="21" y2="18" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Currency'

export const Currency = memo<IconProps>(themed(Icon))
