export function formatTime(parameter) {
  return parameter < 10 ? `0${parameter}` : parameter;
}
