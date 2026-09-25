import type { TextMarkerState } from '../core/TextMarkerState';
import { RectangularBoxMarkerBaseFactory } from './RectangularBoxMarkerBaseFactory';
export declare class TextMarkerFactory extends RectangularBoxMarkerBaseFactory {
    static typeName: string;
    static createMarker(params?: Partial<TextMarkerState>): TextMarkerState;
}
//# sourceMappingURL=TextMarkerFactory.d.ts.map