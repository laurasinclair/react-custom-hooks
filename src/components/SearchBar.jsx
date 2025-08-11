import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import CustomBlock from "./CustomBlock";

export function SearchBar() {
	const [input, setInput] = useState("");
	const debouncedInput = useDebounce(input, 1000);

	useEffect(() => {
		if (debouncedInput) {
			// do the API call with debouncedInput instead of input
			// = after x time has occurred since user stopped typing
			console.log("Searching for:", debouncedInput);
		}
	}, [debouncedInput]);

	return (
		<CustomBlock label={`useDebounce()`}>
			<input
				type="text"
				placeholder="Search..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<div>Searching for: <strong>{debouncedInput}</strong></div>
		</CustomBlock>
	);
}
