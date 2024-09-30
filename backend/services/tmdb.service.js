import axios from "axios";

export const fetchFromTMDB = async (url) => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODcxZmRmZjJiY2U3YWEwNzMwMjE4MTJiMWExN2EyYyIsIm5iZiI6MTcyNzYxNTU1My44MzQ4NzYsInN1YiI6IjY2Zjk0OTBlMTQwZmJmNmExYTVmNzA4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XjYBdOyzK1cuC4h5UGKA68SBagecOGQBh5MJdk6e198",
		},
	};

	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};
