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
        d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
        stroke={`${color}`}
      />
      <Polyline points="15,9 18,9 18,11" stroke={`${color}`} />
      <Path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" stroke={`${color}`} />
      <Line x1="6" x2="7" y1="10" y2="10" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Mailbox'

export const Mailbox = memo<IconProps>(themed(Icon))
