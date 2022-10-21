import { useState, Fragment } from "react";
import BotonFlotante from "./components/BotonFlotante";
import Modal from "./components/Modal";
import Resultado from "./components/Resulatdo";

function App() {
	const [fecha, guardarFecha] = useState("");
	const [horaInicio, guardarHoraInicio] = useState("");
	const [horaFin, guardarHoraFin] = useState("");
	const [tiempo, guardarTiempo] = useState("");
	const [pago, guardarPago] = useState(0);

	let componente;
	if (pago !== 0) {
		componente = (
			<Resultado
				fecha={fecha}
				horaInicio={horaInicio}
				horaFin={horaFin}
				tiempo={tiempo}
				pago={pago}
			></Resultado>
		);
	}

	return (
		<Fragment>
			<div className="container">
				<h1 className="text-center mt-3 mb-5">Día trabajado</h1>
				<div className="d-grid gap-2">{componente}</div>
				<BotonFlotante modalID="modalFormulario" />
			</div>
			<Modal
				id="modalFormulario"
				titulo="Ingresar nuevo pago"
				datos={{
					guardarFecha,
					horaInicio,
					guardarHoraInicio,
					horaFin,
					guardarHoraFin,
					guardarTiempo,
					guardarPago,
				}}
			/>
		</Fragment>
	);
}

export default App;
