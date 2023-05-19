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
      <Rect width="14" height="6" x="5" y="15" rx="2" stroke={`${color}`} />
      <Rect width="10" height="6" x="7" y="3" rx="2" stroke={`${color}`} />
      <Path d="M2 21h20" stroke={`${color}`} />
      <Path d="M2 3h20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'AlignVerticalSpaceBetween'

export const AlignVerticalSpaceBetween = memo<IconProps>(themed(Icon))
