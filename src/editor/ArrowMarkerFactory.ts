import type { ArrowMarkerState } from '../core/ArrowMarkerState';
import { LinearMarkerBaseFactory } from './LinearMarkerBaseFactory';

export class ArrowMarkerFactory extends LinearMarkerBaseFactory {
  public static typeName = 'ArrowMarker';

  public static override createMarker(
    params?: Partial<ArrowMarkerState>
  ): ArrowMarkerState {
    return {
      ...super.createMarker(params),
      arrowType: 'end',
      ...params,
    };
  }
}
