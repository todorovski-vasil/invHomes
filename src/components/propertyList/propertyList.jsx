import React, { useState } from "react"
// import { useSelector, useDispatch } from 'react-redux';

import PropertyTile from "../propertyTile/propertyTile";

function PropertyList() {
	const [numDisplayed, setNumDisplayed] = useState(5);

	const attributes = {
		id: 45,
		name: "Howden Street",
		address: "Ladbroke Grove W6",
		price: 1300000,
		nrBedrooms: 3,
		nrBathrooms: 2,
		type: "match",
		photo: "data:image/jpeg;base64,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"
	}

	return (
	<section className="flex gap-[20px] p-[20px]">
		{/* {properties.slice(numDisplayed).map(() => ( */}
			<PropertyTile attributes={attributes}/>
		{/* ))} */}
	</section>
)}

export default PropertyList;