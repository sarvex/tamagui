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
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
        stroke={`${color}`}
      />
      <Path
        d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
        stroke={`${color}`}
      />
      <Path d="M9 11.2h5.7" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'FunctionSquare'

export const FunctionSquare = memo<IconProps>(themed(Icon))
