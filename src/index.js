export const dnic = dni => {
	// ([0-6][0-9]{2})-([0-2][0-9]|3[0-1])(0[1-9]|1[0-2])([0-9]{2})-([0-9]{4}[A-X])
	const regex = /([0-6][d]{2})-([0-2][d]|3[0-1])(0[1-9]|1[0-2])([d]{2})-([d]{4}[A-X])/

	return regex.test(dni)
}

export const dnicWithDateValidation = dni => {
	if (!dni) {
		return null
	}
}
