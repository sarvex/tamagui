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
      <_Circle cx="18" cy="18" r="3" stroke={`${color}`} />
      <_Circle cx="6" cy="6" r="3" stroke={`${color}`} />
      <Path d="M18 11.5V15" stroke={`${color}`} />
      <Path d="m21 3-6 6" stroke={`${color}`} />
      <Path d="m21 9-6-6" stroke={`${color}`} />
      <Line x1="6" x2="6" y1="9" y2="21" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'GitPullRequestClosed'

export const GitPullRequestClosed = memo<IconProps>(themed(Icon))
