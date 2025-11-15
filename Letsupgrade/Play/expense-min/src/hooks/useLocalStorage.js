/*import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.log("something went wrong", e);
    }
  }, [key, state]);

  function setter(next) {
    if (typeof next === "function") {
      setState((prev) => {
        const v = next(prev);
        try {
          localStorage.setItem(key, JSON.stringify(v));
        } catch {}
        return v;
      });
    } else {
      setState(next);
    }
  }

  return [state, setter];
}
*/

import { useState, useEffect } from "react";

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    const parsed = saved ? JSON.parse(saved) : initial;
    return Array.isArray(parsed) ? parsed : initial; // <-- only change
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
