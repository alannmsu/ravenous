const apiKey = 'q8xnPWtZYBMHx--AQxtB_pw7dx285Gj91OecwJw05pP1igNVjg--SvoNXUg7YsPxoD_YAzaEhg_7I_PipsRdkTh8a5xrWPiKGO1j5lO5zRRQNRqIyNi-jYPFt0I3XXYx';

let Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => ({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					}));
			}
		});
	}
};

export default Yelp;