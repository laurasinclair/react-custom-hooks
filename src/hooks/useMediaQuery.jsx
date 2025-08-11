import { useState, useEffect } from "react";

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(() =>
		typeof window !== "undefined" ? window.matchMedia(query).matches : false
	);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const update = () => setMatches(mediaQueryList.matches);
		mediaQueryList.addEventListener("change", update);
		update();
		return () => mediaQueryList.removeEventListener("change", update);
	}, [query]);

	return matches;
}
