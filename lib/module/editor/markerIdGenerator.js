"use strict";

let currentId = 0;
export const generateMarkerId = () => {
  currentId++;
  return `marker-${currentId}`;
};
//# sourceMappingURL=markerIdGenerator.js.map