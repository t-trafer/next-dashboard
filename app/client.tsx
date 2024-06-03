'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function Client({ id }: { id: string }) {
  useReportWebVitals((metrics) => {
    console.log(id, ' ', metrics.name);
    console.log(metrics);
  });
  return null;
}
