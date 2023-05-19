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
        d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
        stroke={`${color}`}
      />
      <Path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" stroke={`${color}`} />
      <Path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" stroke={`${color}`} />
      <Path d="m2 2 20 20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'BellOff'

export const BellOff = memo<IconProps>(themed(Icon))
