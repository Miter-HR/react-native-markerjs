"use strict";

import { MarkerBaseFactory } from "./MarkerBaseFactory.js";
export class LinearMarkerBaseFactory extends MarkerBaseFactory {
  static typeName = 'LinearMarkerBase';
  static createMarker(params) {
    return {
      ...super.createMarker(params),
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      ...params
    };
  }
}
//# sourceMappingURL=LinearMarkerBaseFactory.js.map