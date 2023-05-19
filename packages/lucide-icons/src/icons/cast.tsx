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
      <Path
        d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
        stroke={`${color}`}
      />
      <Path d="M2 12a9 9 0 0 1 8 8" stroke={`${color}`} />
      <Path d="M2 16a5 5 0 0 1 4 4" stroke={`${color}`} />
      <Line x1="2" x2="2.01" y1="20" y2="20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Cast'

export const Cast = memo<IconProps>(themed(Icon))
