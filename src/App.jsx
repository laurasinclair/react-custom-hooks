import DropdownMenu from "./components/DropDownMenu";
import { SearchBar } from "./components/SearchBar";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { ResponsiveHeader } from "./components/Responsiveheader";
import { ToggleBox } from "./components/ToggleBox";

function App() {
	return (
		<div className="App">
			<DropdownMenu /> {/* useOnClickOutside */}
			<SearchBar /> {/* useDebounce */}
			<DarkModeToggle /> {/* useLocalStorage */}
			<ResponsiveHeader /> {/* useMediaQuery */}
			<ToggleBox /> {/* useToggle */}
		</div>
	);
}

export default App;
