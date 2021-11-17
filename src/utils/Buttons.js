export const button = function (handler, className, text) {
	return (
		<button onClick={handler} className={className}>
			{text}
		</button>
	);
};
