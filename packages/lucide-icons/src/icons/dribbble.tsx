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
      <_Circle cx="12" cy="12" r="10" stroke={`${color}`} />
      <Path
        d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
        stroke={`${color}`}
      />
      <Path
        d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
        stroke={`${color}`}
      />
      <Path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Dribbble'

export const Dribbble = memo<IconProps>(themed(Icon))
