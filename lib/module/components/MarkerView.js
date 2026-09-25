"use strict";

import { StyleSheet, View } from 'react-native';
import Svg, { Image } from 'react-native-svg';
import { markerComponentMap } from "./core/markerComponentMap.js";
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import Logo from "./core/Logo.js";
import { Activator } from "../core/Activator.js";

/**
 * Represents the public API for the {@link MarkerView} component.
 * Exposes methods to access the visual element of the annotation that can be used for rendering.
 */

/**
 * Props for the {@link MarkerView} component.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * MarkerView component for displaying an annotated image with markers.
 *
 * Typical usage looks something like this:
 *
 * ```tsx
 * <MarkerView
 *    ref={markerViewRef}
 *    targetSrc={selectedImage}
 *    annotation={annotation}
 *  />
 * ```
 */
const MarkerView = /*#__PURE__*/forwardRef(({
  targetSrc,
  annotation,
  scaleStroke = true,
  disableManualZoom = false
}, ref) => {
  const [annotatedImageSize, setAnnotatedImageSize] = useState(null);
  const [layoutSize, setLayoutSize] = useState(null);
  const visualRef = useRef(null);
  useImperativeHandle(ref, () => ({
    visualRef
  }));
  const [gestureStartLocation, setGestureStartLocation] = useState(null);
  const [zoomGestureStartLocation, setZoomGestureStartLocation] = useState(null);
  const [zoomGestureStartZoomFactor, setZoomGestureStartZoomFactor] = useState(null);
  const [gestureStartOffset, setGestureStartOffset] = useState({
    x: 0,
    y: 0
  });
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [manualZoomFactor, setManualZoomFactor] = useState(null);
  const zoomFactor = useMemo(() => {
    if (manualZoomFactor !== null) {
      return manualZoomFactor;
    }
    if (annotatedImageSize && layoutSize) {
      // fit the annotated image to the layout size

      // Calculate scale to fit the image within the layout while preserving aspect ratio
      const imgWidth = annotation?.width ?? annotatedImageSize.width;
      const imgHeight = annotation?.height ?? annotatedImageSize.height;
      const layoutAspect = layoutSize.width / layoutSize.height;
      const imgAspect = imgWidth / imgHeight;
      if (imgAspect > layoutAspect) {
        // Image is wider than layout, fit width
        return layoutSize.width / imgWidth;
      } else {
        // Image is taller than layout, fit height
        return layoutSize.height / imgHeight;
      }
    }
    return 1;
  }, [manualZoomFactor, annotatedImageSize, layoutSize, annotation?.width, annotation?.height]);
  const handleAnnotationLayout = ev => {
    const {
      width,
      height
    } = ev.nativeEvent.layout;
    setLayoutSize({
      width,
      height
    });
  };

  // backup for when onLoad doesn't fire on Android in some cases
  const handleInitialImageLayout = ev => {
    if (annotation === null) {
      const {
        width,
        height
      } = ev.nativeEvent.layout;
      setAnnotatedImageSize({
        width,
        height
      });
    }
  };
  const handleInitialImageLoad = ev => {
    if (annotation === null) {
      const {
        width,
        height
      } = ev.nativeEvent.source;
      setAnnotatedImageSize({
        width,
        height
      });
    }
  };
  const handleAnnotatedImageLoad = ev => {
    if (annotation) {
      const {
        width,
        height
      } = ev.nativeEvent.source;
      // Update the annotated image size
      setAnnotatedImageSize({
        width,
        height
      });
    }
  };
  const handleStartShouldSetResponder = ev => {
    return ev.nativeEvent.touches.length === 2 && !disableManualZoom;
  };
  const handleResponderGrant = ev => {
    setGestureStartLocation({
      pageX: ev.nativeEvent.pageX,
      pageY: ev.nativeEvent.pageY,
      locationX: ev.nativeEvent.locationX,
      locationY: ev.nativeEvent.locationY
    });
    setGestureStartOffset({
      x: offsetX,
      y: offsetY
    });
    if (ev.nativeEvent.touches.length > 1) {
      const [touch1, touch2] = ev.nativeEvent.touches;
      if (!touch1 || !touch2) {
        console.warn('Not enough touches for zoom gesture');
        return;
      }
      setZoomGestureStartLocation([{
        touchId: touch1.identifier,
        pageX: touch1.pageX,
        pageY: touch1.pageY,
        locationX: touch1.locationX,
        locationY: touch1.locationY
      }, {
        touchId: touch2.identifier,
        pageX: touch2.pageX,
        pageY: touch2.pageY,
        locationX: touch2.locationX,
        locationY: touch2.locationY
      }]);
      setZoomGestureStartZoomFactor(zoomFactor);
    }
  };
  const handleResponderMove = ev => {
    if (ev.nativeEvent.touches.length > 1) {
      const [touch1, touch2] = ev.nativeEvent.touches;
      const [startTouch1, startTouch2] = zoomGestureStartLocation ?? [];
      if (!touch1 || !touch2 || !startTouch1 || !startTouch2 || !zoomGestureStartZoomFactor) {
        console.warn('Not enough data for zoom gesture');
        return;
      }
      const initialDistance = Math.sqrt(Math.pow(startTouch1.pageX - startTouch2.pageX, 2) + Math.pow(startTouch1.pageY - startTouch2.pageY, 2));
      const currentDistance = Math.sqrt(Math.pow(touch1.pageX - touch2.pageX, 2) + Math.pow(touch1.pageY - touch2.pageY, 2));
      // Prevent division by zero
      if (initialDistance === 0) return;

      // Calculate zoom factor change as the ratio of current to initial distance
      let zoomFactorChange = currentDistance / initialDistance;

      // Optionally, clamp the zoom factor to reasonable bounds
      zoomFactorChange = Math.max(0.2, Math.min(zoomFactorChange, 5));
      const distanceX = ev.nativeEvent.pageX - (gestureStartLocation?.pageX ?? 0);
      const distanceY = ev.nativeEvent.pageY - (gestureStartLocation?.pageY ?? 0);
      if (Math.abs(distanceX) > 3 || Math.abs(distanceY) > 3) {
        // Only apply zoom and offset if the gesture has moved significantly
        setManualZoomFactor(zoomGestureStartZoomFactor * zoomFactorChange);
        setOffsetX((gestureStartOffset.x + distanceX) * zoomFactorChange);
        setOffsetY((gestureStartOffset.y + distanceY) * zoomFactorChange);
      }
    }
  };
  const handleResponderRelease = _ev => {
    setGestureStartLocation(null);
  };
  const displaySize = annotation ? {
    width: annotation.width,
    height: annotation.height
  } : annotatedImageSize;
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    onLayout: handleAnnotationLayout,
    children: [annotation === null && annotatedImageSize === null && /*#__PURE__*/_jsx(Svg, {
      children: /*#__PURE__*/_jsx(Image, {
        href: targetSrc,
        onLayout: handleInitialImageLayout,
        onLoad: handleInitialImageLoad
      })
    }), displaySize && /*#__PURE__*/_jsx(View, {
      ref: visualRef,
      collapsable: false,
      children: /*#__PURE__*/_jsxs(Svg, {
        width: displaySize.width * zoomFactor,
        height: displaySize.height * zoomFactor,
        viewBox: `0 0 ${displaySize.width} ${displaySize.height}`,
        onStartShouldSetResponder: handleStartShouldSetResponder,
        onResponderGrant: handleResponderGrant,
        onResponderMove: handleResponderMove,
        onResponderRelease: handleResponderRelease,
        onResponderTerminate: handleResponderRelease,
        style: {
          marginLeft: offsetX,
          marginTop: offsetY
        },
        children: [/*#__PURE__*/_jsx(Image, {
          href: targetSrc,
          width: displaySize.width,
          height: displaySize.height,
          onLoad: handleAnnotatedImageLoad
        }), annotation?.markers.map((marker, index) => {
          const MarkerComponent = markerComponentMap[marker.typeName];
          return MarkerComponent ? /*#__PURE__*/_jsx(MarkerComponent, {
            zoomFactor: zoomFactor,
            scaleStroke: scaleStroke,
            ...marker
          }, index) : null;
        })]
      })
    }), !Activator.isLicensed('MJSRN') && /*#__PURE__*/_jsx(Logo, {})]
  });
});
export default MarkerView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
});
//# sourceMappingURL=MarkerView.js.map