import { type MarkerBaseState } from '../core/MarkerBaseState';
export declare class MarkerBaseFactory {
    static typeName: string;
    static createMarker<T>(params?: Partial<T extends MarkerBaseState ? T : MarkerBaseState>): MarkerBaseState;
}
//# sourceMappingURL=MarkerBaseFactory.d.ts.map