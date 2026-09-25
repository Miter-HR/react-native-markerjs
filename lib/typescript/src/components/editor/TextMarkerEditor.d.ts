import type { TextMarkerState } from '../../core/TextMarkerState';
import type { MarkerBaseEditorProps } from './MarkerBaseEditor';
interface TextMarkerEditorProps extends MarkerBaseEditorProps {
    marker: TextMarkerState;
    onTextMarkerEdit?: (marker: TextMarkerState) => void;
}
declare const TextMarkerEditor: React.FC<TextMarkerEditorProps>;
export default TextMarkerEditor;
//# sourceMappingURL=TextMarkerEditor.d.ts.map