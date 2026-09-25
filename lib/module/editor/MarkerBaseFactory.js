"use strict";

import { markerIdSymbol } from "../core/MarkerBaseState.js";
import { generateMarkerId } from "./markerIdGenerator.js";
export class MarkerBaseFactory {
  static typeName = 'MarkerBase';
  static createMarker(params) {
    return {
      typeName: this.typeName,
      strokeColor: 'red',
      strokeWidth: 3,
      strokeDasharray: '',
      opacity: 1,
      [markerIdSymbol]: generateMarkerId(),
      ...params
    };
  }
}
//# sourceMappingURL=MarkerBaseFactory.js.map