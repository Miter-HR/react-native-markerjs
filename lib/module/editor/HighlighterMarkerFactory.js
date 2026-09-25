"use strict";

import { FreehandMarkerFactory } from "./FreehandMarkerFactory.js";
export class HighlighterMarkerFactory extends FreehandMarkerFactory {
  static typeName = 'HighlighterMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      strokeColor: '#ffff00',
      strokeWidth: 20,
      opacity: 0.5
    };
  }
}
//# sourceMappingURL=HighlighterMarkerFactory.js.map