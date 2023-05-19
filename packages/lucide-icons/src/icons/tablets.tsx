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
      <_Circle cx="7" cy="7" r="5" stroke={`${color}`} />
      <_Circle cx="17" cy="17" r="5" stroke={`${color}`} />
      <Path d="M12 17h10" stroke={`${color}`} />
      <Path d="m3.46 10.54 7.08-7.08" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Tablets'

export const Tablets = memo<IconProps>(themed(Icon))
