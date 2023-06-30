import { useCallback, useEffect, useState } from "react";

export function useIsScrolledToBottom() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const container = document.querySelector("#cat-container");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolledToBottom;
}
