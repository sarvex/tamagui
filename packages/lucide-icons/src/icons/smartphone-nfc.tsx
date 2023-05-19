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
      <Rect width="7" height="12" x="2" y="6" rx="1" stroke={`${color}`} />
      <Path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" stroke={`${color}`} />
      <Path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" stroke={`${color}`} />
      <Path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'SmartphoneNfc'

export const SmartphoneNfc = memo<IconProps>(themed(Icon))
