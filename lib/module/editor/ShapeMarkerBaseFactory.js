"use strict";

import { ShapeOutlineMarkerBaseFactory } from "./ShapeOutlineMarkerBaseFactory.js";
export class ShapeMarkerBaseFactory extends ShapeOutlineMarkerBaseFactory {
  static typeName = 'ShapeMarkerBase';
  static createMarker() {
    return {
      ...super.createMarker(),
      fillColor: 'red'
    };
  }
}
//# sourceMappingURL=ShapeMarkerBaseFactory.js.map