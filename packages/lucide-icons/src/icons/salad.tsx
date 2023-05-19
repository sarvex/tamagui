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
      <Path d="M7 21h10" stroke={`${color}`} />
      <Path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" stroke={`${color}`} />
      <Path
        d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
        stroke={`${color}`}
      />
      <Path d="m13 12 4-4" stroke={`${color}`} />
      <Path
        d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'Salad'

export const Salad = memo<IconProps>(themed(Icon))
