"use strict";

import { ShapeMarkerBaseFactory } from "./ShapeMarkerBaseFactory.js";
export class CoverMarkerFactory extends ShapeMarkerBaseFactory {
  static typeName = 'CoverMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      strokeColor: 'black',
      strokeWidth: 1,
      fillColor: 'black'
    };
  }
}
//# sourceMappingURL=CoverMarkerFactory.js.map