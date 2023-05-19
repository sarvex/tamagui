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
      <Path d="M11 12H3" stroke={`${color}`} />
      <Path d="M16 6H3" stroke={`${color}`} />
      <Path d="M16 18H3" stroke={`${color}`} />
      <Path d="M18 9v6" stroke={`${color}`} />
      <Path d="M21 12h-6" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ListPlus'

export const ListPlus = memo<IconProps>(themed(Icon))
