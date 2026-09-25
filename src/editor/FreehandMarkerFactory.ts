import type { FreehandMarkerState } from '../core/FreehandMarkerState';
import { MarkerBaseFactory } from './MarkerBaseFactory';

export class FreehandMarkerFactory extends MarkerBaseFactory {
  public static typeName = 'FreehandMarker';
  public static override createMarker(
    params?: Partial<FreehandMarkerState>
  ): FreehandMarkerState {
    return {
      ...super.createMarker(params),
      points: [],
      ...params,
    };
  }
}
