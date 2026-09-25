"use strict";

import { FrameMarkerFactory } from "./FrameMarkerFactory.js";
import { EllipseFrameMarkerFactory } from "./EllipseFrameMarkerFactory.js";
import { LineMarkerFactory } from "./LineMarkerFactory.js";
import { FreehandMarkerFactory } from "./FreehandMarkerFactory.js";
import { CustomImageMarkerFactory } from "./CustomImageMarkerFactory.js";
import { PolygonMarkerFactory } from "./PolygonMarkerFactory.js";
import { TextMarkerFactory } from "./TextMarkerFactory.js";
import { ArrowMarkerFactory } from "./ArrowMarkerFactory.js";
import { CoverMarkerFactory } from "./CoverMarkerFactory.js";
import { EllipseMarkerFactory } from "./EllipseMarkerFactory.js";
import { HighlightMarkerFactory } from "./HighlightMarkerFactory.js";
import { HighlighterMarkerFactory } from "./HighlighterMarkerFactory.js";
import { MeasurementMarkerFactory } from "./MeasurementMarkerFactory.js";
import { CalloutMarkerFactory } from "./CalloutMarkerFactory.js";
export const markerFactoryMap = {
  FrameMarker: FrameMarkerFactory,
  EllipseFrameMarker: EllipseFrameMarkerFactory,
  LineMarker: LineMarkerFactory,
  FreehandMarker: FreehandMarkerFactory,
  CustomImageMarker: CustomImageMarkerFactory,
  PolygonMarker: PolygonMarkerFactory,
  TextMarker: TextMarkerFactory,
  ArrowMarker: ArrowMarkerFactory,
  CoverMarker: CoverMarkerFactory,
  EllipseMarker: EllipseMarkerFactory,
  HighlightMarker: HighlightMarkerFactory,
  HighlighterMarker: HighlighterMarkerFactory,
  MeasurementMarker: MeasurementMarkerFactory,
  CalloutMarker: CalloutMarkerFactory
  // Add more mappings here as you add more marker types
};
//# sourceMappingURL=markerFactoryMap.js.map