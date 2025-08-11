import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import CustomBlock from "./CustomBlock";

export default function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null); // 1. ref is created but not attached yet to any DOM element

	useEffect(() => {
		console.log("menuRef.current: ", menuRef.current); // 3. now that the component has been mounted, we can console.log() it
		// this returns the whole <div class="menu">...</div>
	}, [isOpen]);

	useOnClickOutside(menuRef, () => setIsOpen(false));

	return (
		<CustomBlock label={`useOnClickOutside()`}>
			<button onClick={() => setIsOpen((prev) => !prev)}>Open menu</button>

			{isOpen && (
				<div style={{ position: "relative" }}>
					<div
						ref={menuRef} // 2. ref gets attached to the DOM element when it's rendered
						className="menu"
					>
						<ul>
							<li>Dropdown content</li>
							<li>Dropdown content</li>
							<li>Dropdown content</li>
						</ul>
					</div>
				</div>
			)}
		</CustomBlock>
	);
}
