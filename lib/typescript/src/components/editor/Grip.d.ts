import { type GProps } from 'react-native-svg';
interface GripProps extends GProps {
    x: number;
    y: number;
    strokeColor?: string;
    fillColor?: string;
    flipColors?: boolean;
    zoomFactor?: number;
}
declare const Grip: React.FC<GripProps>;
export default Grip;
//# sourceMappingURL=Grip.d.ts.map