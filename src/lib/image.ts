export function safeImageSrc(src?: string | null) {
  if (!src) return src ?? "";
  try {
    // encodeURI preserves already-encoded sequences while escaping spaces
    return encodeURI(src);
  } catch (e) {
    return src;
  }
}

export default safeImageSrc;
