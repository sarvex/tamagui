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
      <Path d="M15 4V2" stroke={`${color}`} />
      <Path d="M15 16v-2" stroke={`${color}`} />
      <Path d="M8 9h2" stroke={`${color}`} />
      <Path d="M20 9h2" stroke={`${color}`} />
      <Path d="M17.8 11.8 19 13" stroke={`${color}`} />
      <Path d="M15 9h0" stroke={`${color}`} />
      <Path d="M17.8 6.2 19 5" stroke={`${color}`} />
      <Path d="m3 21 9-9" stroke={`${color}`} />
      <Path d="M12.2 6.2 11 5" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Wand'

export const Wand = memo<IconProps>(themed(Icon))
