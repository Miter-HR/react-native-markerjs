import type { TextMarkerState } from '../core/TextMarkerState';
import { RectangularBoxMarkerBaseFactory } from './RectangularBoxMarkerBaseFactory';

export class TextMarkerFactory extends RectangularBoxMarkerBaseFactory {
  public static typeName = 'TextMarker';

  public static override createMarker(
    params?: Partial<TextMarkerState>
  ): TextMarkerState {
    return {
      ...super.createMarker(params),
      text: 'Text',
      fontSize: { value: 12, units: 'px', step: 1 },
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: params?.color ?? params?.strokeColor ?? 'red',
      ...params,
    };
  }
}
