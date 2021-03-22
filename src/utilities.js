const utilities = {
  calculate_scaledImageDim: function (windowDim, imageDim) {
    const window_aspectRatio = windowDim.width / windowDim.height;
    const image_aspectRatio = imageDim.width / imageDim.height;

    if (image_aspectRatio < window_aspectRatio) {
      const scalingRatio = windowDim.height / imageDim.height;

      const scaledImageDim = {
        height: windowDim.height,
        width: scalingRatio * imageDim.width,
        scalingRatio: scalingRatio,
      };
      return scaledImageDim;
    } else {
      const scalingRatio = windowDim.width / imageDim.width;
      const scaledImageDim = {
        height: scalingRatio * imageDim.height,
        width: windowDim.width,
        scalingRatio: scalingRatio,
      };
      return scaledImageDim;
    }
  },
};

export default utilities;
