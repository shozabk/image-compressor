const DEFAULT_QUALITY = 0.1;

function compressImage(file: File, options?: { width?: number; height?: number; quality?: number; }): Promise<File> {
  return new Promise((resolve, reject) => {
    const blobURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = blobURL;
    img.onerror = function () {
      URL.revokeObjectURL(this.src);
      reject(new Error("Cannot load image"));
    };
    img.onload = function () {
      URL.revokeObjectURL(img.src);
      
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = options?.width ?? img.width;
      canvas.height = options?.height ?? img.height;

      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      const quality = options?.quality !== undefined ? options.quality : DEFAULT_QUALITY;
      let mimeType = file.type || "image/jpeg";

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to compress image"));
            return;
          }

          const compressedFile = new File([blob], file.name, {
            type: mimeType,
            lastModified: Date.now(),
          });

          resolve(compressedFile);
        },
        mimeType,
        quality
      );
    };
  });
}

export { compressImage };
