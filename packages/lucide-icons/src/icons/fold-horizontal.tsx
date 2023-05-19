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
      <Path d="M2 12h6" stroke={`${color}`} />
      <Path d="M22 12h-6" stroke={`${color}`} />
      <Path d="M12 2v2" stroke={`${color}`} />
      <Path d="M12 8v2" stroke={`${color}`} />
      <Path d="M12 14v2" stroke={`${color}`} />
      <Path d="M12 20v2" stroke={`${color}`} />
      <Path d="m19 9-3 3 3 3" stroke={`${color}`} />
      <Path d="m5 15 3-3-3-3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'FoldHorizontal'

export const FoldHorizontal = memo<IconProps>(themed(Icon))
