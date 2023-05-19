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
      <Polyline points="3.5 2 6.5 12.5 18 12.5" stroke={`${color}`} />
      <Line x1="9.5" x2="5.5" y1="12.5" y2="20" stroke={`${color}`} />
      <Line x1="15" x2="18.5" y1="12.5" y2="20" stroke={`${color}`} />
      <Path d="M2.75 18a13 13 0 0 0 18.5 0" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'RockingChair'

export const RockingChair = memo<IconProps>(themed(Icon))
