"use strict";

import { MarkerBaseFactory } from "./MarkerBaseFactory.js";
export class RectangularBoxMarkerBaseFactory extends MarkerBaseFactory {
  static typeName = 'RectangularBoxMarkerBase';
  static createMarker(params) {
    return {
      ...super.createMarker(params),
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      strokeDasharray: '',
      rotationAngle: 0,
      ...params
    };
  }
}
//# sourceMappingURL=RectangularBoxMarkerBaseFactory.js.map