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
        d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        stroke={`${color}`}
      />
      <Path d="M16 14v2" stroke={`${color}`} />
      <Path d="M8 14v2" stroke={`${color}`} />
      <Path d="M16 20h.01" stroke={`${color}`} />
      <Path d="M8 20h.01" stroke={`${color}`} />
      <Path d="M12 16v2" stroke={`${color}`} />
      <Path d="M12 22h.01" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'CloudHail'

export const CloudHail = memo<IconProps>(themed(Icon))
