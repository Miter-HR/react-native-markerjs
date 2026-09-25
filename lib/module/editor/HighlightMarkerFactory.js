"use strict";

import { ShapeMarkerBaseFactory } from "./ShapeMarkerBaseFactory.js";
export class HighlightMarkerFactory extends ShapeMarkerBaseFactory {
  static typeName = 'HighlightMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      strokeColor: 'transparent',
      strokeWidth: 0,
      fillColor: '#ffff00',
      opacity: 0.5
    };
  }
}
//# sourceMappingURL=HighlightMarkerFactory.js.map