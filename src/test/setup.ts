import '@testing-library/jest-dom/vitest';

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  // @ts-expect-error - assigning mock to global
  globalThis.IntersectionObserver = IntersectionObserverMock;
}
