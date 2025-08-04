import Svg, {
  Text,
  type TextProps,
  type SvgProps
} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 24 / 60

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
      viewBox="0 0 60 24"
      {...rest}
      width={size}
      height={Number(size) * ratio}>
      <Text
        fill={fill || pal.text.color}
        x="0" y="14"
        font-size="24" font-weight="600">
        Naledi
      </Text>
    </Svg>
  )
}
