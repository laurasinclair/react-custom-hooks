import { useState, useCallback } from "react";

export function useToggle(initial = false) {
	const [state, setState] = useState(initial);

	const toggle = useCallback(() => setState((prev) => !prev), []);
	
	const set = useCallback((val) => setState(val), []); 
	// set a specific value, not a toggle (for example: "false" to close something)
	
	return [state, toggle, set];
}
