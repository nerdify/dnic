# Dnic - Javascript

Validador de Número de Documento Nacional de Identidad (DNI/Cédula) Nicaragüense.

Validador de Numero de Documento Nacional de Identidad (DNI/Cedula) Nicaragüense.

Esctructura del DNI:

<ol>
  <li>Los primeros 3 dígitos identifican el municipio.</li>
  <li>Los siguientes 6 dígitos corresponden a la fecha de nacimiento.</li>
  <li>Los últimos dígitos es el número de producción.</li>
</ol>

<img src="https://i.ibb.co/YX8Tk1n/descarga.jpg" />

## Uso

import dnic, {validate, validateDate, getMunicipalities} from '@nerdify/dnic'

const dni = '281-140891-0022V';

dnic.isValid(dni); // true

validate(dni); // true

getMunicipalities(dni); // Leon
