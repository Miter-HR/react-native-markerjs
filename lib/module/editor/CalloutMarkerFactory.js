"use strict";

import { TextMarkerFactory } from "./TextMarkerFactory.js";
export class CalloutMarkerFactory extends TextMarkerFactory {
  static typeName = 'CalloutMarker';
  static createMarker() {
    return {
      ...super.createMarker(),
      tipPosition: {
        x: 0,
        y: 0
      },
      color: '#ffffff',
      fillColor: '#ff0000',
      strokeColor: '#ffffff',
      strokeWidth: 3,
      padding: 20
    };
  }
}
//# sourceMappingURL=CalloutMarkerFactory.js.map