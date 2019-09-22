export const dnic = dni => {
	console.log('dni: ', dni);

	//([0-6][0-9]{2})-([0-2][0-9]|3[0-1])(0[1-9]|1[0-2])([0-9]{2})-([0-9]{4}[A-X])
	const regExp = RegExp('([0-6][0-9]{2})-([0-2][0-9]|3[0-1])(0[1-9]|1[0-2])([0-9]{2})-([0-9]{4}[A-X])');

	return regExp.test(dni);
};

export const dnicWithDateValidation = dni => {
	console.log('dni: ', dni);

	if(!dni) {
		return;
	}
}