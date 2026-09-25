import { type MarkerBaseState } from '../../core/MarkerBaseState';
import React from 'react';
interface MarkerBaseProps extends MarkerBaseState {
    zoomFactor?: number;
    scaleStroke?: boolean;
    children?: React.ReactNode;
}
declare const MarkerBase: React.FC<MarkerBaseProps>;
export default MarkerBase;
export type { MarkerBaseProps };
//# sourceMappingURL=MarkerBase.d.ts.map