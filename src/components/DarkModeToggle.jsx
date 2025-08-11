import { useLocalStorage } from "../hooks/useLocalStorage";
import CustomBlock from "./CustomBlock";

export function DarkModeToggle() {
	const [dark, setDark] = useLocalStorage("dark-mode", false);

	return (
		<CustomBlock label={`useLocalStorage()`} style={{padding: "0"}}>
			<div
				style={{
					background: dark ? "#222" : "#fff",
					color: dark ? "#fff" : "#000",
					padding: "40px 20px 30px",
				}}
			>
				<button onClick={() => setDark((prev) => !prev)}>
					{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
				</button>
			</div>
		</CustomBlock>
	);
}
