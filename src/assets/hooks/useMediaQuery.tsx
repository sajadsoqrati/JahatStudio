import { useEffect, useState } from "react";
export default function useMediaQuery(query: string): boolean {
  const [isMatches, setIsMatched] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setIsMatched(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return isMatches;
}
