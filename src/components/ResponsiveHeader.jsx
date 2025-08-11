import { useMediaQuery } from "../hooks/useMediaQuery";
import CustomBlock from "./MovieCard";

export function ResponsiveHeader() {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<CustomBlock label={`useMediaQuery()`}>
			{isMobile ? <h2>📱 &lt; 768px</h2> : <h2>🖥 &gt; 768px</h2>}
		</CustomBlock>
	);
}
