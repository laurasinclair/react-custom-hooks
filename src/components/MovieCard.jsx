export default function CustomBlock({label, children}) {
	return (
		<div className="block">
			<div className="block_top">
				<p>{label}</p>
			</div>
			<div
				className="block_body"
			>
				{children}
			</div>
		</div>
	);
}
