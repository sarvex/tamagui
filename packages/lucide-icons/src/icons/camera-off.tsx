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
      <Line x1="2" x2="22" y1="2" y2="22" stroke={`${color}`} />
      <Path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" stroke={`${color}`} />
      <Path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" stroke={`${color}`} />
      <Path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'CameraOff'

export const CameraOff = memo<IconProps>(themed(Icon))
