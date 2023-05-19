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
        d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
        stroke={`${color}`}
      />
      <Line x1="16" x2="16" y1="2" y2="6" stroke={`${color}`} />
      <Line x1="8" x2="8" y1="2" y2="6" stroke={`${color}`} />
      <Line x1="3" x2="21" y1="10" y2="10" stroke={`${color}`} />
      <Path d="m16 20 2 2 4-4" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'CalendarCheck2'

export const CalendarCheck2 = memo<IconProps>(themed(Icon))
