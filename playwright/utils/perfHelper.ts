export function logMetric(name: string, value: number) {
  console.log(`${name}: ${value} ms`);
}

export function assertThreshold(name: string, actual: number, expected: number) {
  console.log(`${name}: ${actual} ms | threshold: ${expected} ms`);
  if (actual > expected) {
    throw new Error(`${name} exceeded threshold. Actual: ${actual} ms, Expected: ${expected} ms`);
  }
}