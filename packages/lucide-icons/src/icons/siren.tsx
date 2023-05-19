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
      <Path
        d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"
        stroke={`${color}`}
      />
      <Path
        d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"
        stroke={`${color}`}
      />
      <Path d="M21 12h1" stroke={`${color}`} />
      <Path d="M18.5 4.5 18 5" stroke={`${color}`} />
      <Path d="M2 12h1" stroke={`${color}`} />
      <Path d="M12 2v1" stroke={`${color}`} />
      <Path d="m4.929 4.929.707.707" stroke={`${color}`} />
      <Path d="M12 12v6" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Siren'

export const Siren = memo<IconProps>(themed(Icon))
