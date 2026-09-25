"use strict";

import { markerIdSymbol } from "../core/MarkerBaseState.js";
export const createNewAnnotationState = (width, height) => {
  return {
    version: 3,
    width,
    height,
    markers: []
  };
};
export const addMarkerToAnnotation = (annotation, newMarker) => {
  return {
    ...annotation,
    markers: [...annotation.markers, newMarker]
  };
};
export const updateMarkerInAnnotation = (annotation, updatedMarker) => {
  const updatedAnnotation = {
    ...annotation,
    markers: annotation.markers.map(mark => mark[markerIdSymbol] === updatedMarker[markerIdSymbol] ? {
      ...mark,
      ...updatedMarker
    } : mark)
  };
  return updatedAnnotation;
};
//# sourceMappingURL=stateHelpers.js.map