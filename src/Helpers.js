require("dayjs/locale/es");
const dayjs = require("dayjs");

export function horasSonCorrectas(horaInicio, horaFin) {
	const fecha1 = dayjs("0000-00-00 " + horaInicio);
	const fecha2 = dayjs("0000-00-00 " + horaFin);

	return fecha1.isBefore(fecha2);
}

export function formatearFecha(fecha) {
	return dayjs(fecha).locale("es").format("dddd D MMMM YYYY");
}

export function calcularTiempoTrabajado(horaInicio, horaFin) {
	// Separar las horas de los minutos
	// 23:55 = [23 horas, 55 minutos]
	const partesHora1 = horaInicio.split(":");
	const partesHora2 = horaFin.split(":");

	// Calcular cuantos minutos hay en cada hora
	// 23:55 = 23 * 60 + 55 = 1435 minutos
	const totalMinutosHora1 = partesHora1[0] * 60 + Number(partesHora1[1]);
	const totalMinutosHora2 = partesHora2[0] * 60 + Number(partesHora2[1]);

	// Calcular los minutos que hay entre la hora de inicio y de fin
	// 1170 - 945 = 225 minutos
	const minutosEntreHoras = totalMinutosHora2 - totalMinutosHora1;

	// Calcular cuantas horas hay en los minutos
	// 225 / 60 = 3.75 = 3 horas
	const horas = Math.floor(minutosEntreHoras / 60);

	// Calcular cuantos minutos sobran
	// 225 % 60 = 45 minutos
	const minutos = minutosEntreHoras % 60;

	return {
		horas,
		minutos,
		minutosTotales: minutosEntreHoras,
		formateado: `
			${horas !== 0 ? horas + " horas" : ""} 
			${minutos !== 0 ? minutos + " minutos" : ""}
		`,
	};
}

export function calcularTotal(minutosTrabajados) {
	// 1 hora = $31.25
	// 1 minuto = 0.5208333...
	return ((minutosTrabajados * 31.25) / 60).toFixed(2);
}
