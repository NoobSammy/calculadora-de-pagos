import { useState } from "react";
import {
	horasSonCorrectas,
	formatearFecha,
	calcularTiempoTrabajado,
	calcularTotal,
} from "../Helpers";
import { Modal as Modalbs } from "bootstrap/dist/js/bootstrap";

const Formulario = (props) => {
	const {
		guardarFecha,
		horaInicio,
		guardarHoraInicio,
		horaFin,
		guardarHoraFin,
		guardarTiempo,
		guardarPago,
	} = props;

	const [error, guardarError] = useState(false);

	const calcularPago = (e) => {
		e.preventDefault();

		// Validar que la hora de inicio está antes que la hora final
		if (!horasSonCorrectas(horaInicio, horaFin)) {
			guardarError(true);
			return;
		}

		// Eliminar el error previo
		guardarError(false);

		const tiempos = calcularTiempoTrabajado(horaInicio, horaFin);
		guardarTiempo(tiempos["formateado"]);

		const pago = calcularTotal(tiempos["minutosTotales"]);
		guardarPago(pago);

		// Cerrar modal
		const modalFormulario = document.querySelector(".modal");
		Modalbs.getInstance(modalFormulario).hide();

		//e.target.reset();
	};

	return (
		<form onSubmit={calcularPago}>
			<div className="mb-3">
				<label htmlFor="fecha" className="form-label">
					<i className="bi bi-calendar-event me-1"></i>
					Fecha
				</label>
				<input
					type="date"
					className="form-control"
					id="fecha"
					required
					onChange={(e) => guardarFecha(formatearFecha(e.target.value))}
				></input>
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="hora-inicio" className="form-label">
						<i className="bi bi-clock me-1"></i>
						Hora inicial
					</label>
					<input
						type="time"
						className="form-control"
						id="hora-inicio"
						required
						onChange={(e) => guardarHoraInicio(e.target.value)}
					></input>
				</div>
				<div className="col">
					<label htmlFor="hora-fin" className="form-label">
						<i className="bi bi-clock me-1"></i>
						Hora final
					</label>
					<input
						type="time"
						className="form-control"
						id="hora-fin"
						required
						onChange={(e) => guardarHoraFin(e.target.value)}
					></input>
				</div>
			</div>
			<div className="row">
				<div className="col d-grid">
					<button type="reset" className="btn btn-secondary">
						<i className="bi bi-eraser me-1"></i>
						Limpiar
					</button>
				</div>
				<div className="col d-grid">
					<button type="submit" className="btn btn-primary">
						<i className="bi bi-calculator me-1"></i>
						Calcular
					</button>
				</div>
			</div>
			{error ? (
				<div className="mt-3">
					<div className="alert alert-danger" role="alert">
						<i className="bi bi-exclamation-circle me-2"></i>
						La hora inicial no puede estar después de la hora final.
					</div>
				</div>
			) : null}
		</form>
	);
};

export default Formulario;
