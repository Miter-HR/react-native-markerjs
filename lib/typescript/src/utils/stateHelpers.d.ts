import type { AnnotationState } from '../core/AnnotationState';
import { type MarkerBaseState } from '../core/MarkerBaseState';
export declare const createNewAnnotationState: (width: number, height: number) => AnnotationState;
export declare const addMarkerToAnnotation: (annotation: AnnotationState, newMarker: MarkerBaseState) => AnnotationState;
export declare const updateMarkerInAnnotation: (annotation: AnnotationState, updatedMarker: MarkerBaseState) => AnnotationState;
//# sourceMappingURL=stateHelpers.d.ts.map