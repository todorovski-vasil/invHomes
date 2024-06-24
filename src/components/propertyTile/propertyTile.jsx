import React from "react"

function PropertyTile({
	attributes
}) {
	const {
		id,
		name,
		address,
		price,
		nrBedrooms,
		nrBathrooms,
		type,
		photo
	} = attributes;
	return (
		<article className="w-full md:w-1/2 lg:w-1/3">
			<img className="w-full mb-4" src={photo} />
			<section className="flex">
				<section className="flex-col text-left">
					<p className="text-[18px] font-semibold">{name}</p>
					<p>{address}</p>
				</section>
			<section className="flex-col ml-auto text-right">
			<p className="text-[18px]">£{price}</p>
			<p className="text-gray-600">{nrBedrooms} bedrooms / {nrBathrooms} bathrooms</p>
			</section>
			</section>
			
			
  	</article>
)}

export default PropertyTile;