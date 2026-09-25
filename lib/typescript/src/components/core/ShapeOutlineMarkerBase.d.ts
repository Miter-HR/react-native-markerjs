import type { ShapeOutlineMarkerBaseState } from '../../core/ShapeOutlineMarkerBaseState';
import { type RectangularBoxMarkerBaseProps } from './RectangularBoxMarkerBase';
interface ShapeOutlineMarkerBaseProps extends RectangularBoxMarkerBaseProps, ShapeOutlineMarkerBaseState {
    d: string;
}
declare const ShapeOutlineMarkerBase: React.FC<ShapeOutlineMarkerBaseProps>;
export default ShapeOutlineMarkerBase;
export type { ShapeOutlineMarkerBaseProps };
//# sourceMappingURL=ShapeOutlineMarkerBase.d.ts.map