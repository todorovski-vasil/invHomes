import classNames from "classnames";

function Button ({
	label,
	state = "",
	onClick
}) {
	return (
		<button
			className={classNames(
				"font-medium py-2 px-4 rounded-[8px]",
				"border-[1px] border-solid border-green-700",
				{ "bg-green-700 text-white": state === 'selected' },
				{ "bg-white hover:bg-gray-200 ": state !== 'selected' })}
			onClick={onClick}
		>
			{label}
		</button>
)}

export default Button;