import { type RectangularBoxMarkerBaseProps } from './RectangularBoxMarkerBase';
import type { ShapeMarkerBaseState } from '../../core/ShapeMarkerBaseState';
interface ShapeMarkerBaseProps extends RectangularBoxMarkerBaseProps, ShapeMarkerBaseState {
    d: string;
}
declare const ShapeMarkerBase: React.FC<ShapeMarkerBaseProps>;
export default ShapeMarkerBase;
export type { ShapeMarkerBaseProps };
//# sourceMappingURL=ShapeMarkerBase.d.ts.map