"use strict";

import { StyleSheet, View } from 'react-native';
import Svg, { Image } from 'react-native-svg';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { markerIdSymbol } from "../core/MarkerBaseState.js";
import { generateMarkerId } from "../editor/markerIdGenerator.js";
import { editorComponentMap } from "./editor/editorComponentMap.js";
import { markerFactoryMap } from "../editor/markerFactoryMap.js";
import { addMarkerToAnnotation, createNewAnnotationState, updateMarkerInAnnotation } from "../utils/stateHelpers.js";
import Logo from "./core/Logo.js";
import { Activator } from "../core/Activator.js";

/**
 * Represents the public API for the {@link MarkerArea} component.
 * Exposes methods to create markers, switch modes, and delete selected markers.
 */

/**
 * Props for the {@link MarkerArea} component.
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * The main component for creating and editing markers on an image.
 * It allows users to create, select, and edit markers on a target image.
 *
 * Typical usage looks something like this:
 * ```tsx
 * <MarkerArea
 *    targetSrc={targetImage}
 *    annotation={annotation}
 *    ref={markerAreaRef}
 *    onAnnotationChange={setAnnotation}
 * />
 * ```
 */
const MarkerArea = /*#__PURE__*/forwardRef(({
  targetSrc,
  annotation,
  scaleStroke = true,
  onAnnotationChange,
  onSelectedMarkerChange,
  onTextMarkerEdit
}, ref) => {
  const [mode, setMode] = useState('select');

  // selected marker ID
  const [selectedMarker, setSelectedMarker] = useState(null);

  // type of marker to create in "create" mode
  const [markerTypeToCreate, setMarkerTypeToCreate] = useState(null);
  const [markerTypeToCreateParams, setMarkerTypeToCreateParams] = useState(null);

  // marker being created in "create" mode
  const [creatingMarker, setCreatingMarker] = useState(null);
  // editor mode for the marker being created - this informs the editor component
  // about whether it's in the process of being created or finished creation
  const [creatingEditorMode, setCreatingEditorMode] = useState('select');
  const [gestureStartLocation, setGestureStartLocation] = useState(null);
  const [gestureMoveLocation, setGestureMoveLocation] = useState(null);
  const [zoomGestureStartLocation, setZoomGestureStartLocation] = useState(null);
  const [zoomGestureStartZoomFactor, setZoomGestureStartZoomFactor] = useState(null);
  const [gestureStartOffset, setGestureStartOffset] = useState({
    x: 0,
    y: 0
  });
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [annotatedImageSize, setAnnotatedImageSize] = useState(null);
  const [layoutSize, setLayoutSize] = useState(null);
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

  // initiates marker creation
  const createMarker = (markerType, params) => {
    setMarkerTypeToCreate(markerType);
    setMarkerTypeToCreateParams(params ?? null);
    setMode('create');
  };

  // Expose methods to the parent component via ref
  useImperativeHandle(ref, () => ({
    createMarker,
    switchToSelectMode: () => setMode('select'),
    deleteSelectedMarker: () => {
      if (annotation && selectedMarker && onAnnotationChange) {
        const updatedMarkers = annotation.markers.filter(marker => marker[markerIdSymbol] !== selectedMarker[markerIdSymbol]);
        onAnnotationChange({
          ...annotation,
          markers: updatedMarkers
        });
        setSelectedMarker(null);
        onSelectedMarkerChange?.(null);
      }
    }
  }));

  // Ensure all markers have a unique ID
  // This is important for the editor to track markers correctly
  useEffect(() => {
    if (!annotation) return;
    const missingIdIndex = annotation.markers.findIndex(marker => {
      return marker[markerIdSymbol] === undefined;
    });
    if (missingIdIndex > -1) {
      const newMarkers = annotation.markers.map(marker => {
        const newMarker = {
          ...marker,
          [markerIdSymbol]: marker[markerIdSymbol] ?? generateMarkerId()
        };
        return newMarker;
      });
      if (onAnnotationChange) {
        onAnnotationChange({
          ...annotation,
          markers: newMarkers
        });
      }
    }
  }, [onAnnotationChange, annotation]);

  // Handle gestures on the marker area
  const handleStartShouldSetResponder = ev => {
    return mode === 'create' || ev.nativeEvent.touches.length === 2;
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
    if (mode === 'select' && ev.nativeEvent.touches.length > 1) {
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
    } else if (mode === 'create' && markerTypeToCreate) {
      // console.log('Creating marker of type:', markerTypeToCreate);

      setCreatingEditorMode('create');
      const markerFactory = markerFactoryMap[markerTypeToCreate];
      if (markerFactory) {
        // console.log(`Using marker factory for type: ${markerTypeToCreate}`);
        const newMarker = markerFactory.createMarker(markerTypeToCreateParams ?? undefined);
        setCreatingMarker(newMarker);
      }
    }
  };
  const handleResponderMove = ev => {
    if (mode === 'select' && ev.nativeEvent.touches.length > 1) {
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
    setGestureMoveLocation({
      pageX: ev.nativeEvent.pageX,
      pageY: ev.nativeEvent.pageY,
      locationX: ev.nativeEvent.locationX,
      locationY: ev.nativeEvent.locationY
    });
  };
  const handleResponderRelease = _ev => {
    setCreatingEditorMode('finishCreation');
    setGestureStartLocation(null);
    setGestureMoveLocation(null);
  };

  // If a marker is being created, we need to find its editor component
  const CreatingEditorComponent = creatingMarker && editorComponentMap[creatingMarker.typeName];
  if (creatingMarker && !CreatingEditorComponent) {
    console.warn(`No editor component found for type: ${creatingMarker.typeName}`);
    return null;
  }
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
      if (onAnnotationChange) {
        onAnnotationChange(createNewAnnotationState(width, height));
      }
    }
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
      if (onAnnotationChange) {
        onAnnotationChange(createNewAnnotationState(width, height));
      }
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
  const handleMarkerCreate = (m, continuous = false) => {
    if (!annotation || !onAnnotationChange) return;
    onAnnotationChange(addMarkerToAnnotation(annotation, m));
    setCreatingMarker(null);
    setMode('select');
    setSelectedMarker(m ?? null);
    onSelectedMarkerChange?.(m ?? null);
    if (continuous) {
      createMarker(m.typeName, markerTypeToCreateParams ?? undefined);
    }
  };
  return /*#__PURE__*/_jsxs(View, {
    style: {
      ...styles.container,
      opacity: annotation ? 1 : 0
    },
    onLayout: handleAnnotationLayout,
    children: [annotation === null && /*#__PURE__*/_jsx(Svg, {
      children: /*#__PURE__*/_jsx(Image, {
        href: targetSrc,
        onLayout: handleInitialImageLayout,
        onLoad: handleInitialImageLoad
      })
    }), annotation && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs(Svg, {
        width: annotation.width * zoomFactor,
        height: annotation.height * zoomFactor,
        viewBox: `0 0 ${annotation.width} ${annotation.height}`,
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
          width: annotation.width,
          height: annotation.height,
          onLoad: handleAnnotatedImageLoad
        }), annotation.markers.map((marker, index) => {
          // find the editor component for the marker
          const EditorComponent = editorComponentMap[marker.typeName];
          if (!EditorComponent) {
            console.warn(`No editor component found for type: ${marker.typeName}`);
            return null;
          }
          return /*#__PURE__*/_jsx(EditorComponent, {
            marker: marker,
            zoomFactor: zoomFactor,
            scaleStroke: scaleStroke,
            disableInteraction: mode === 'create',
            selected: selectedMarker !== null && selectedMarker[markerIdSymbol] === marker[markerIdSymbol],
            onSelect: m => {
              if (selectedMarker?.[markerIdSymbol] !== m[markerIdSymbol]) {
                setSelectedMarker(m ?? null);
                onSelectedMarkerChange?.(m ?? null);
              }
            },
            onMarkerChange: m => {
              if (onAnnotationChange) {
                onAnnotationChange(updateMarkerInAnnotation(annotation, m));
              }
            },
            onTextMarkerEdit: onTextMarkerEdit
          }, marker[markerIdSymbol] ?? index);
        }), creatingMarker && CreatingEditorComponent && /*#__PURE__*/_jsx(CreatingEditorComponent, {
          marker: creatingMarker,
          mode: creatingEditorMode,
          zoomFactor: zoomFactor,
          scaleStroke: scaleStroke,
          gestureStartLocation: gestureStartLocation ?? undefined,
          gestureMoveLocation: gestureMoveLocation ?? undefined,
          onMarkerChange: m => {
            setCreatingMarker(m);
          },
          onMarkerCreate: handleMarkerCreate,
          onTextMarkerEdit: onTextMarkerEdit
        })]
      }), !Activator.isLicensed('MJSRN') && /*#__PURE__*/_jsx(Logo, {})]
    })]
  });
});
export default MarkerArea;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=MarkerArea.js.map