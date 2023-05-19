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
        d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        stroke={`${color}`}
      />
      <Path
        d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        stroke={`${color}`}
      />
      <Path d="M7 21h10" stroke={`${color}`} />
      <Path d="M12 3v18" stroke={`${color}`} />
      <Path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Scale'

export const Scale = memo<IconProps>(themed(Icon))
