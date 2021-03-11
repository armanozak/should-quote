export default function (key: string) {
  if (key.trim() !== key) return true;

  if (/[.,;/]/.test(key)) return true;

  try {
    new Function(`({${key}:0}).${key}`);
  } catch (_) {
    return true;
  }

  return false;
}
