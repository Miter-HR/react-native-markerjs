import React from 'react';
import type { MarkerBaseState } from '../../core/MarkerBaseState';
import type { ViewProps } from 'react-native';
import type { GestureLocation } from '../../editor/GestureLocation';
export type EditorMode = 'create' | 'finishCreation' | 'select';
interface MarkerBaseEditorProps extends ViewProps {
    marker: MarkerBaseState;
    mode?: EditorMode;
    selected?: boolean;
    children?: React.ReactNode;
    gestureStartLocation?: GestureLocation;
    gestureMoveLocation?: GestureLocation;
    zoomFactor?: number;
    scaleStroke?: boolean;
    disableInteraction?: boolean;
    onMarkerChange?: (marker: MarkerBaseState) => void;
    onMarkerCreate?: (marker: MarkerBaseState, continuous?: boolean) => void;
    onSelect?: (marker: MarkerBaseState) => void;
}
declare const MarkerBaseEditor: React.FC<MarkerBaseEditorProps>;
export default MarkerBaseEditor;
export type { MarkerBaseEditorProps };
//# sourceMappingURL=MarkerBaseEditor.d.ts.map