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
        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        stroke={`${color}`}
      />
      <Polyline points="14 2 14 8 20 8" stroke={`${color}`} />
      <Line x1="9.5" x2="14.5" y1="12.5" y2="17.5" stroke={`${color}`} />
      <Line x1="14.5" x2="9.5" y1="12.5" y2="17.5" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'FileX'

export const FileX = memo<IconProps>(themed(Icon))
