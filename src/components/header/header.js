import React from "react"
import Button from '../button/button'

function Header() {
	return (
	<header className="flex p-[20px]">
		<section className="flex-col">
			<p className="text-left font-medium text-[24px] text-green-700">Hello {"Thursday"}</p>
			<p className="p">Wellcome to your personal dashboard</p>
		</section>
		<section className="ml-auto flex items-end gap-[20px]">
			<Button label="Matches" state="selected" />
			<Button label="Suggestions"/>
		</section>
	</header>
)}

export default Header;