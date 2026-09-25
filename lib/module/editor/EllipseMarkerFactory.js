"use strict";

import { ShapeMarkerBaseFactory } from "./ShapeMarkerBaseFactory.js";
export class EllipseMarkerFactory extends ShapeMarkerBaseFactory {
  static typeName = 'EllipseMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      strokeColor: '#ff0000',
      strokeWidth: 1,
      fillColor: '#ff0000'
    };
  }
}
//# sourceMappingURL=EllipseMarkerFactory.js.map