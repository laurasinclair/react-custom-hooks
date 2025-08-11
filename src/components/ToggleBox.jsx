import { useToggle } from "../hooks/useToggle";
import CustomBlock from "./CustomBlock";

export function ToggleBox() {
	const [isBoxVisible, toggleBoxVisible] = useToggle(false);

	// 👉 exploring the syntax
	const [isInfoBoxVisible, toggleInfoBox, closeInfoBox] = useToggle(true); // we can rename these the way we want

	const myArray = ["a", "b", "c"]; // destructuring arrays
	const [value1, value2, value3] = myArray;
	// console.log(value2); // = "b"

	return (
		<CustomBlock label={`useToggle()`}>
			{isBoxVisible && <div className="block_bg">🎉 Surprise!</div>}

			<button onClick={toggleBoxVisible}>
				{isBoxVisible ? "Hide" : "Show"}
			</button>
		</CustomBlock>
	);
}
