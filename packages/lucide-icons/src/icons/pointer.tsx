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
      <Path d="M22 14a8 8 0 0 1-8 8" stroke={`${color}`} />
      <Path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" stroke={`${color}`} />
      <Path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" stroke={`${color}`} />
      <Path
        d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
        stroke={`${color}`}
      />
      <Path
        d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'Pointer'

export const Pointer = memo<IconProps>(themed(Icon))
