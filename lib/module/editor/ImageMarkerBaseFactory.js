"use strict";

import { MarkerBaseFactory } from "./MarkerBaseFactory.js";
export class ImageMarkerBaseFactory extends MarkerBaseFactory {
  static typeName = 'ImageMarkerBase';
  static createMarker(params) {
    return {
      ...super.createMarker(),
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
//# sourceMappingURL=ImageMarkerBaseFactory.js.map