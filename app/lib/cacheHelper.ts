
const memCache = new Map<string, { data: unknown; expires: number }>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Retrieves data from the cache if it exists and is not expired.
 * @param key - The cache key to look up.
 * @returns The cached data, or null if not found or expired.
 */
export function getCache(key: string): unknown | null {
    const cachedObj = memCache.get(key);
    if (cachedObj && cachedObj.expires > Date.now()) {
      return cachedObj.data; // Return cached data if not expired
    }
    return null; // Return null if not found or expired
  }
  
  /**
   * Sets data into the cache with an expiration time.
   * @param key - The cache key under which to store the data.
   * @param data - The data to cache.
   * @param duration - Duration in milliseconds for which the data should be cached.
   */
  export function setCache(key: string, data: unknown, duration: number = CACHE_DURATION): void {
    memCache.set(key, {
      data,
      expires: Date.now() + duration,
    });
    console.log('\n\n==== memCache:\n', memCache);
  }
  