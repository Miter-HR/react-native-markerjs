"use strict";

import { LinearMarkerBaseFactory } from "./LinearMarkerBaseFactory.js";
export class ArrowMarkerFactory extends LinearMarkerBaseFactory {
  static typeName = 'ArrowMarker';
  static createMarker(params) {
    return {
      ...super.createMarker(params),
      arrowType: 'end',
      ...params
    };
  }
}
//# sourceMappingURL=ArrowMarkerFactory.js.map