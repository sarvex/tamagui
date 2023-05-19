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
      <Rect
        width="8"
        height="4"
        x="8"
        y="2"
        rx="1"
        ry="1"
        stroke={`${color}`}
      />
      <Path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        stroke={`${color}`}
      />
      <Path d="M12 11h4" stroke={`${color}`} />
      <Path d="M12 16h4" stroke={`${color}`} />
      <Path d="M8 11h.01" stroke={`${color}`} />
      <Path d="M8 16h.01" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ClipboardList'

export const ClipboardList = memo<IconProps>(themed(Icon))
