const dnic = dni => {
  if (!dni) {
    return false;
  }

  const regex = /^([0-6][\d]{2})-([0-2][\d]|3[0-1])(0[1-9]|1[0-2])([\d]{2})-([\d]{4}[A-X])$/;

  return regex.test(dni);
};

export default dnic;

export const dnicWithDateValidation = dni => {
  if (!dnic(dni)) {
    return false;
  }

  const date = dni.split('-')[1];

  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 6);

  const newDate = new Date(year, month - 1, day);

  return Boolean(newDate);
};

export const getRegionByDni = dni => {
  if (!dnic(dni)) {
    return false;
  }

  const region = dni.split('-')[0];

  const mapRegions = [
    {'001': 'Managua'},
    {'002': 'San Rafael Del Sur'},
    {'003': 'Tipitapa'},
    {'004': 'Villa Carlos Fonseca'},
    {'005': 'San Francisco Libre'}
  ];

  const foundRegion = mapRegions.find(r => r[region]);

  return Object.values(foundRegion)[0];
};
