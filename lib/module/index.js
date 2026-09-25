"use strict";

/**
 * @module marker.js for React Native
 * @category API Reference
 */

import MarkerArea from "./components/MarkerArea.js";
import MarkerView from "./components/MarkerView.js";
export { MarkerArea, MarkerView };
export { Activator } from "./core/Activator.js";
export { markerIdSymbol } from "./core/MarkerBaseState.js";
export { AnnotationProvider, useAnnotationContext } from "./contexts/AnnotationContext.js";

// state helpers
export { createNewAnnotationState, addMarkerToAnnotation, updateMarkerInAnnotation } from "./utils/stateHelpers.js";
//# sourceMappingURL=index.js.map