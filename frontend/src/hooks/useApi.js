import { useEffect, useState } from 'react';
import { getErrorMessage } from '../services/api.js';

/**
 * Fetches data from a backend endpoint and exposes loading/error/data
 * state. `requestFn` should be a stable function reference (defined
 * outside the render, or wrapped by the caller) that returns a promise.
 */
export function useApi(requestFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    requestFn()
      .then((response) => {
        if (isMounted) setData(response.data?.data ?? null);
      })
      .catch((err) => {
        if (isMounted) setError(getErrorMessage(err));
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
