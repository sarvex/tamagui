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
      <Rect width="6" height="14" x="2" y="5" rx="2" stroke={`${color}`} />
      <Rect width="6" height="10" x="12" y="7" rx="2" stroke={`${color}`} />
      <Path d="M22 2v20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'AlignHorizontalJustifyEnd'

export const AlignHorizontalJustifyEnd = memo<IconProps>(themed(Icon))
