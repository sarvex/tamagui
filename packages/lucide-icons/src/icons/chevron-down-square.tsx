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
      <Polyline points="16,10 12,14 8,10" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ChevronDownSquare'

export const ChevronDownSquare = memo<IconProps>(themed(Icon))
