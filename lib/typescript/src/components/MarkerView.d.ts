import { View } from 'react-native';
import type { AnnotationState } from '../core/AnnotationState';
import { type RefObject } from 'react';
/**
 * Represents the public API for the {@link MarkerView} component.
 * Exposes methods to access the visual element of the annotation that can be used for rendering.
 */
export interface MarkerViewHandle {
    visualRef: RefObject<View | null>;
}
/**
 * Props for the {@link MarkerView} component.
 */
export interface MarkerViewProps {
    /**
     * Source of the target image to annotate.
     */
    targetSrc: string;
    /**
     * Annotation state containing markers to display.
     * If null, the component will display the target image without any markers.
     */
    annotation: AnnotationState | null;
    /**
     * Whether to scale the stroke width of markers based on the zoom factor.
     * Defaults to true.
     */
    scaleStroke?: boolean;
    /**
     * Whether to disable manual zooming with pinch gestures.
     * Defaults to false, allowing users to zoom in and out manually.
     */
    disableManualZoom?: boolean;
}
/**
 * MarkerView component for displaying an annotated image with markers.
 *
 * Typical usage looks something like this:
 *
 * ```tsx
 * <MarkerView
 *    ref={markerViewRef}
 *    targetSrc={selectedImage}
 *    annotation={annotation}
 *  />
 * ```
 */
declare const MarkerView: import("react").ForwardRefExoticComponent<MarkerViewProps & import("react").RefAttributes<MarkerViewHandle>>;
export default MarkerView;
//# sourceMappingURL=MarkerView.d.ts.map