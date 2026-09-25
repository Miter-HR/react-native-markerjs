import type { AnnotationState } from '../core/AnnotationState';
import { type MarkerBaseState } from '../core/MarkerBaseState';
/**
 * Represents the public API for the {@link MarkerArea} component.
 * Exposes methods to create markers, switch modes, and delete selected markers.
 */
export interface MarkerAreaHandle {
    /**
     * Initiates marker creation with the specified type and parameters.
     * @param markerType Type of the marker to create.
     * @param params Optional initial parameters for the marker.
     */
    createMarker: (markerType: string, params?: Partial<MarkerBaseState>) => void;
    /**
     * Switches the MarkerArea to "select" mode.
     * In this mode, users can select and edit existing markers.
     */
    switchToSelectMode: () => void;
    /**
     * Deletes the currently selected marker.
     * If no marker is selected, this method does nothing.
     */
    deleteSelectedMarker: () => void;
}
/**
 * Props for the {@link MarkerArea} component.
 */
export interface MarkerAreaProps {
    /**
     * Source of the target image to annotate.
     */
    targetSrc: string;
    /**
     * Annotation state containing markers and other annotation data.
     * Set this to null to create a new annotation.
     */
    annotation: AnnotationState | null;
    /**
     * Whether to scale the stroke width of markers based on zoom level.
     * Defaults to true.
     */
    scaleStroke?: boolean;
    /**
     * Callback invoked when the selected marker changes.
     * @param marker Marker that was selected or created.
     */
    onSelectedMarkerChange?: (marker: MarkerBaseState | null) => void;
    /**
     * Callback invoked when the annotation state changes.
     * @param annotation Updated annotation state.
     */
    onAnnotationChange?: (annotation: AnnotationState) => void;
    /**
     * Callback invoked when the user taps an existing text marker to edit it.
     * Host apps can show their own editor instead of the built-in fullscreen Modal.
     */
    onTextMarkerEdit?: (marker: MarkerBaseState) => void;
}
/**
 * The main component for creating and editing markers on an image.
 * It allows users to create, select, and edit markers on a target image.
 *
 * Typical usage looks something like this:
 * ```tsx
 * <MarkerArea
 *    targetSrc={targetImage}
 *    annotation={annotation}
 *    ref={markerAreaRef}
 *    onAnnotationChange={setAnnotation}
 * />
 * ```
 */
declare const MarkerArea: import("react").ForwardRefExoticComponent<MarkerAreaProps & import("react").RefAttributes<MarkerAreaHandle>>;
export default MarkerArea;
//# sourceMappingURL=MarkerArea.d.ts.map