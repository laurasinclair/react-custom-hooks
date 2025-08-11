export default function CustomBlock({label, children, ...rest}) {
	return (
		<div className="block">
			<div className="block_top">
				<p>{label}</p>
			</div>
			<div
				className="block_body"
				{...rest}
			>
				{children}
			</div>
		</div>
	);
}
