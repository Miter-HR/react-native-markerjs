import type { AnnotationState } from '../core/AnnotationState';
import React from 'react';
export type AnnotationContextType = {
    annotation: AnnotationState | null;
    setAnnotation: (newAnnotation: AnnotationState | null) => void;
};
export declare const useAnnotationContext: () => AnnotationContextType;
export declare const AnnotationProvider: React.FC<{
    children: React.ReactNode;
}>;
//# sourceMappingURL=AnnotationContext.d.ts.map