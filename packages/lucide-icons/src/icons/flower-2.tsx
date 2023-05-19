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
        d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
        stroke={`${color}`}
      />
      <_Circle cx="12" cy="8" r="2" stroke={`${color}`} />
      <Path d="M12 10v12" stroke={`${color}`} />
      <Path
        d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
        stroke={`${color}`}
      />
      <Path
        d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'Flower2'

export const Flower2 = memo<IconProps>(themed(Icon))
