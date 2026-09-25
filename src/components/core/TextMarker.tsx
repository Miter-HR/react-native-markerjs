/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rect, Text, TSpan } from 'react-native-svg';
import RectangularBoxMarkerBase, {
  type RectangularBoxMarkerBaseProps,
} from './RectangularBoxMarkerBase';
import type { TextMarkerState } from '../../core/TextMarkerState';

interface TextMarkerProps
  extends RectangularBoxMarkerBaseProps,
    TextMarkerState {}

const TextMarker: React.FC<TextMarkerProps> = ({
  strokeColor,
  strokeWidth,
  strokeDasharray,
  children,
  zoomFactor = 1,
  scaleStroke = true,
  text,
  fontFamily,
  fontSize,
  color,
  ...props
}: TextMarkerProps) => {
  const lines = text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);

  // Use the stored font size (dashboard markerjs3 does this). The stock RN
  // renderer derived fontSize from box height and set the first TSpan dy to
  // that full line-height, which put the baseline at the bottom of the box.
  const fontSizePx =
    fontSize?.units === 'rem' ? fontSize.value * 16 : (fontSize?.value ?? 16);
  const padding = props.padding ?? 2;
  // markerjs3 TextBlock.positionText for a single line:
  // y = padding + textHeight/2 + lineHeight/3 + offsetY (offsetY = padding)
  const firstBaseline = padding * 2 + (fontSizePx * 5) / 6;

  return (
    <RectangularBoxMarkerBase {...props}>
      {/* Transparent rectangle for interaction */}
      <Rect
        x={0}
        y={0}
        width={props.width}
        height={props.height}
        fill="transparent"
        stroke="transparent"
      />
      {children}

      <Text textAnchor="middle">
        {lines.map((line, lineno) => (
          <TSpan
            key={lineno}
            fill={color}
            fontFamily={fontFamily}
            fontSize={`${fontSizePx}px`}
            x={props.width / 2}
            dy={lineno === 0 ? firstBaseline : fontSizePx}
          >
            {line}
          </TSpan>
        ))}
      </Text>
    </RectangularBoxMarkerBase>
  );
};

export default TextMarker;
export type { TextMarkerProps };
