import type { RectangularBoxMarkerBaseState } from '../core/RectangularBoxMarkerBaseState';
import { MarkerBaseFactory } from './MarkerBaseFactory';

export class RectangularBoxMarkerBaseFactory extends MarkerBaseFactory {
  public static typeName = 'RectangularBoxMarkerBase';
  public static override createMarker(
    params?: Partial<RectangularBoxMarkerBaseState>
  ): RectangularBoxMarkerBaseState {
    return {
      ...super.createMarker(params),
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      strokeDasharray: '',
      rotationAngle: 0,
      ...params,
    };
  }
}
