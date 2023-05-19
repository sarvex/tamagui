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
      <Path d="M18 7c0-5.333-8-5.333-8 0" stroke={`${color}`} />
      <Path d="M10 7v14" stroke={`${color}`} />
      <Path d="M6 21h12" stroke={`${color}`} />
      <Path d="M6 13h10" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'PoundSterling'

export const PoundSterling = memo<IconProps>(themed(Icon))
