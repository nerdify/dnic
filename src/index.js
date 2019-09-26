export const dnic = dni => {
	const regex = /([0-6][d]{2})-([0-2][d]|3[0-1])(0[1-9]|1[0-2])([d]{2})-([d]{4}[A-X])/;

	return regex.test(dni);
};

export const dnicWithDateValidation = dni => {
	if (!dni || !dnic(dni)) {
		return false;
	}

	const date = dni.split('-')[1];

	const day = date.slice(0,2);
	const month = date.slice(2, 4);
	const year = date.slice(4,6);

	const newDate = new Date(year, (month -1), day);
	
	return !!newDate;
};
