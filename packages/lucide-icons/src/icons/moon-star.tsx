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
      <Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" stroke={`${color}`} />
      <Path d="M19 3v4" stroke={`${color}`} />
      <Path d="M21 5h-4" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'MoonStar'

export const MoonStar = memo<IconProps>(themed(Icon))
