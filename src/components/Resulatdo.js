import Dropdown from "./Dropdown";

const Resultado = ({ fecha, horaInicio, horaFin, tiempo, pago }) => {
	return (
		<div className="rounded p-3 shadow card-result">
			<div className="row">
				<div className="col">
					<p className="text-muted mb-1 card-result__date">{fecha}</p>
					<p className="fs-5 mb-0 card-result__hours">
						{horaInicio + " - " + horaFin}
					</p>
					<p class="text-muted fw-light">{tiempo}</p>
				</div>
				<div className="col-auto">
					<p className="fs-1 fw-bold mt-4 card-result__payment">{"$" + pago}</p>
				</div>
				<div className="col-auto text-end">
					<Dropdown id="dropdown-1"></Dropdown>
				</div>
			</div>
		</div>
	);
};

export default Resultado;
