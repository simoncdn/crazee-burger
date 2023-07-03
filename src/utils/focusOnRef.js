export const focusOnRef = (ref) => {
  if (!ref.current) return;
  ref.current.focus();
};
