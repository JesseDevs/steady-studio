export const formattedDate = (dateString) => {
	const options = { month: 'short', day: 'numeric', year: 'numeric' };
	const date = new Date(dateString);
	return date.toLocaleDateString(undefined, options);
};
