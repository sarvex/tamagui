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
      <Path d="M16 7h.01" stroke={`${color}`} />
      <Path
        d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
        stroke={`${color}`}
      />
      <Path d="m20 7 2 .5-2 .5" stroke={`${color}`} />
      <Path d="M10 18v3" stroke={`${color}`} />
      <Path d="M14 17.75V21" stroke={`${color}`} />
      <Path d="M7 18a6 6 0 0 0 3.84-10.61" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Bird'

export const Bird = memo<IconProps>(themed(Icon))
