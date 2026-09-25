import type React from 'react';
import type { LinearMarkerBaseState } from '../../core/LinearMarkerBaseState';
import { type MarkerBaseProps } from './MarkerBase';
interface LinearMarkerBaseProps extends MarkerBaseProps, LinearMarkerBaseState {
    d: string;
    startTerminatorD?: string;
    endTerminatorD?: string;
}
declare const LinearMarkerBase: React.FC<LinearMarkerBaseProps>;
export default LinearMarkerBase;
export type { LinearMarkerBaseProps };
//# sourceMappingURL=LinearMarkerBase.d.ts.map