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
      <Rect width="8" height="8" x="3" y="3" rx="2" stroke={`${color}`} />
      <Path d="M7 11v4a2 2 0 0 0 2 2h4" stroke={`${color}`} />
      <Rect width="8" height="8" x="13" y="13" rx="2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Workflow'

export const Workflow = memo<IconProps>(themed(Icon))
