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
      <Line x1="19" x2="5" y1="5" y2="19" stroke={`${color}`} />
      <_Circle cx="6.5" cy="6.5" r="2.5" stroke={`${color}`} />
      <_Circle cx="17.5" cy="17.5" r="2.5" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Percent'

export const Percent = memo<IconProps>(themed(Icon))
