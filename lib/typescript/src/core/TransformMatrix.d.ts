import { SVGMatrix } from 'react-native-svg/lib/typescript/elements/Shape';
/**
 * Represents a simplified version of the SVGMatrix.
 */
export interface ITransformMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}
/**
 * A utility class to transform between SVGMatrix and its simplified representation.
 */
export declare class TransformMatrix {
    static toITransformMatrix(matrix: SVGMatrix): ITransformMatrix;
    static toSVGMatrix(currentMatrix: SVGMatrix, newMatrix: ITransformMatrix): SVGMatrix;
}
//# sourceMappingURL=TransformMatrix.d.ts.map