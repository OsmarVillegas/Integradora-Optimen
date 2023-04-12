// Importación de React y useState desde la librería 'react'
import React, { useState } from 'react';

// Importación de los archivos de mensajes en inglés y español en formato JSON
import MensajesIngles from '../lang/en-US.json';
import MensajesEspañol from '../lang/es-MX.json';

// Importación del componente IntlProvider desde la librería 'react-intl'
import { IntlProvider } from 'react-intl';

// Creación de un nuevo contexto de React
const langContext = React.createContext();

// Definición del componente LangProvider como una función que toma un objeto 'children' como argumento
const LangProvider = ({ children }) => {
	// Definición de las variables para el idioma y los mensajes por defecto
	let localePorDefecto;
	let mensajesPorDefecto;

	// Se obtiene el lenguaje del almacenamiento local del navegador
	const lang = localStorage.getItem('lang');

	// Se establecen las variables para el idioma y los mensajes de acuerdo al lenguaje obtenido
	if (lang) {
		localePorDefecto = lang;

		if (lang === 'en-US') {
			mensajesPorDefecto = MensajesIngles;
		} else if (lang === 'es-MX') {
			mensajesPorDefecto = MensajesEspañol;
		} else {
			localePorDefecto = 'en-US';
			mensajesPorDefecto = MensajesIngles;
		}
	}

	// Se utiliza la función 'useState' para establecer los mensajes y el idioma actual de la aplicación
	const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);

	// Se define la función 'establecerLenguaje' que se utiliza para cambiar el idioma de la aplicación
	const establecerLenguaje = (lenguaje) => {
		switch (lenguaje) {
			case 'es-MX':
				establecerMensajes(MensajesEspañol);
				establecerLocale('es-MX');
				localStorage.setItem('lang', 'es-MX');
				break;
			case 'en-US':
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
		}
	};

	// Se devuelve el componente LangProvider que utiliza el contexto de React para proveer el lenguaje actual a otros componentes
	return (
		<langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
};

// Se exportan el componente LangProvider y el contexto langContext
export { LangProvider, langContext };
// Autor: Mario Alberto Rangel Márquez
//GDS0451
