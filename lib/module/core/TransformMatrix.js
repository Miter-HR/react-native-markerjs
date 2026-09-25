"use strict";

/**
 * Represents a simplified version of the SVGMatrix.
 */

/**
 * A utility class to transform between SVGMatrix and its simplified representation.
 */
export class TransformMatrix {
  static toITransformMatrix(matrix) {
    return {
      a: matrix.a,
      b: matrix.b,
      c: matrix.c,
      d: matrix.d,
      e: matrix.e,
      f: matrix.f
    };
  }
  static toSVGMatrix(currentMatrix, newMatrix) {
    currentMatrix.a = newMatrix.a;
    currentMatrix.b = newMatrix.b;
    currentMatrix.c = newMatrix.c;
    currentMatrix.d = newMatrix.d;
    currentMatrix.e = newMatrix.e;
    currentMatrix.f = newMatrix.f;
    return currentMatrix;
  }
}
//# sourceMappingURL=TransformMatrix.js.map