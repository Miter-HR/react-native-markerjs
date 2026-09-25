"use strict";

import { RectangularBoxMarkerBaseFactory } from "./RectangularBoxMarkerBaseFactory.js";
export class TextMarkerFactory extends RectangularBoxMarkerBaseFactory {
  static typeName = 'TextMarker';
  static createMarker(params) {
    return {
      ...super.createMarker(params),
      text: 'Text',
      fontSize: {
        value: 12,
        units: 'px',
        step: 1
      },
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: params?.color ?? params?.strokeColor ?? 'red',
      ...params
    };
  }
}
//# sourceMappingURL=TextMarkerFactory.js.map