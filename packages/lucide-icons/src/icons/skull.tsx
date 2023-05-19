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
      <_Circle cx="9" cy="12" r="1" stroke={`${color}`} />
      <_Circle cx="15" cy="12" r="1" stroke={`${color}`} />
      <Path d="M8 20v2h8v-2" stroke={`${color}`} />
      <Path d="m12.5 17-.5-1-.5 1h1z" stroke={`${color}`} />
      <Path
        d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'Skull'

export const Skull = memo<IconProps>(themed(Icon))
