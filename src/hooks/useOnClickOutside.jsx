import { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
	// ref = a reference to a DOM element
	// handler = a function to run when clicking outside of the element

	// 👉 we use refs to grab the real HTML element, because react doesn't provide a built-in way to know if a click happened outside a component
	// for that we need to use .contains() (a native DOM method) which only works on actual HTML elements, not React components or JSX

	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) return;
			// !ref.current = if the ref hasn't been attached to a DOM element (= it's null)
			// ref.current will return the whole HTML element <div class="dropdown">...</div>

			handler(event);
			// 👆 if the click was outside the ref element, calls the handler
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		// 👆 set up on the whole document
		// "mousedown" = fired at an Element when a pointing device button is pressed while the pointer is inside the element
		// "touchstart" = detect when a user touches a touch-enabled device's screen

		return () => { // remove on unmount, because it's a browser operation (outside of React)
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}
