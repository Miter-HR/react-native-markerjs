import React from 'react';
import type { RectangularBoxMarkerBaseState } from '../../core/RectangularBoxMarkerBaseState';
import { type MarkerBaseEditorProps } from './MarkerBaseEditor';
interface RectangularBoxMarkerBaseEditorProps extends MarkerBaseEditorProps {
    marker: RectangularBoxMarkerBaseState;
    isResizable?: boolean;
    onLongPress?: () => void;
    onTap?: () => void;
}
declare const RectangularBoxMarkerBaseEditor: React.FC<RectangularBoxMarkerBaseEditorProps>;
export default RectangularBoxMarkerBaseEditor;
//# sourceMappingURL=RectangularBoxMarkerBaseEditor.d.ts.map