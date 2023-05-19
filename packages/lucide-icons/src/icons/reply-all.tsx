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
      <Polyline points="7 17 2 12 7 7" stroke={`${color}`} />
      <Polyline points="12 17 7 12 12 7" stroke={`${color}`} />
      <Path d="M22 18v-2a4 4 0 0 0-4-4H7" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ReplyAll'

export const ReplyAll = memo<IconProps>(themed(Icon))
