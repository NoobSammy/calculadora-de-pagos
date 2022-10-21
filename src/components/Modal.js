import Formulario from "./Formulario";

const Modal = ({ id, titulo, datos }) => {
	const {
		guardarFecha,
		horaInicio,
		guardarHoraInicio,
		horaFin,
		guardarHoraFin,
		guardarTiempo,
		guardarPago,
	} = datos;
	return (
		<div
			className="modal fade"
			id={id}
			tabIndex="-1"
			aria-labelledby={id + "Label"}
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{titulo}</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<Formulario
							guardarFecha={guardarFecha}
							horaInicio={horaInicio}
							guardarHoraInicio={guardarHoraInicio}
							horaFin={horaFin}
							guardarHoraFin={guardarHoraFin}
							guardarTiempo={guardarTiempo}
							guardarPago={guardarPago}
						></Formulario>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
