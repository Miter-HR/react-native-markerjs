"use strict";

import { MarkerBaseFactory } from "./MarkerBaseFactory.js";
export class FreehandMarkerFactory extends MarkerBaseFactory {
  static typeName = 'FreehandMarker';
  static createMarker(params) {
    return {
      ...super.createMarker(params),
      points: [],
      ...params
    };
  }
}
//# sourceMappingURL=FreehandMarkerFactory.js.map