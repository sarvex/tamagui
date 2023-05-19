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
      <Path d="M4 12h8" stroke={`${color}`} />
      <Path d="M4 18V6" stroke={`${color}`} />
      <Path d="M12 18V6" stroke={`${color}`} />
      <Path
        d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"
        stroke={`${color}`}
      />
      <Path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Heading3'

export const Heading3 = memo<IconProps>(themed(Icon))
