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
      <_Circle cx="12" cy="5" r="1" stroke={`${color}`} />
      <_Circle cx="19" cy="5" r="1" stroke={`${color}`} />
      <_Circle cx="5" cy="5" r="1" stroke={`${color}`} />
      <_Circle cx="12" cy="12" r="1" stroke={`${color}`} />
      <_Circle cx="19" cy="12" r="1" stroke={`${color}`} />
      <_Circle cx="5" cy="12" r="1" stroke={`${color}`} />
      <_Circle cx="12" cy="19" r="1" stroke={`${color}`} />
      <_Circle cx="19" cy="19" r="1" stroke={`${color}`} />
      <_Circle cx="5" cy="19" r="1" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Grip'

export const Grip = memo<IconProps>(themed(Icon))
