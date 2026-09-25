"use strict";

import { MarkerBaseFactory } from "./MarkerBaseFactory.js";
export class PolygonMarkerFactory extends MarkerBaseFactory {
  static typeName = 'PolygonMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      points: []
    };
  }
}
//# sourceMappingURL=PolygonMarkerFactory.js.map