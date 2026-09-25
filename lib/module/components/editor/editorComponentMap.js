"use strict";

import CalloutMarkerEditor from "./CalloutMarkerEditor.js";
import FreehandMarkerEditor from "./FreehandMarkerEditor.js";
import LinearMarkerBaseEditor from "./LinearMarkerBaseEditor.js";
import PolygonMarkerEditor from "./PolygonMarkerEditor.js";
import RectangularBoxMarkerBaseEditor from "./RectangularBoxMarkerBaseEditor.js";
import TextMarkerEditor from "./TextMarkerEditor.js";
export const editorComponentMap = {
  FrameMarker: RectangularBoxMarkerBaseEditor,
  EllipseFrameMarker: RectangularBoxMarkerBaseEditor,
  LineMarker: LinearMarkerBaseEditor,
  FreehandMarker: FreehandMarkerEditor,
  CustomImageMarker: RectangularBoxMarkerBaseEditor,
  PolygonMarker: PolygonMarkerEditor,
  TextMarker: TextMarkerEditor,
  ArrowMarker: LinearMarkerBaseEditor,
  CoverMarker: RectangularBoxMarkerBaseEditor,
  EllipseMarker: RectangularBoxMarkerBaseEditor,
  HighlightMarker: RectangularBoxMarkerBaseEditor,
  HighlighterMarker: FreehandMarkerEditor,
  MeasurementMarker: LinearMarkerBaseEditor,
  CalloutMarker: CalloutMarkerEditor
  // Add more mappings here as you add more marker types
};
//# sourceMappingURL=editorComponentMap.js.map