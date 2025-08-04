import Svg, {
  Text,
  type TextProps,
  type SvgProps
} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 16 / 80

export function Logotype({
  fill,
  ...rest
}: {fill?: TextProps['fill']} & SvgProps) {
  const pal = usePalette('default')
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32)

  return (
    <Svg
      fill="none"
      viewBox="0 0 80 16"
      {...rest}
      width={size}
      height={Number(size) * ratio}>
      <Text
        fill={fill || pal.text.color}
        x="14" y="14"
        font-size="16" font-weight="600">
        Naledi
      </Text>
    </Svg>
  )
}
