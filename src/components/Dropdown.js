const Dropdown = ({ id }) => {
	return (
		<div className="dropdown">
			<button
				className="btn btn-light btn-sm dropdown-toggle"
				type="button"
				id={id}
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<i className="bi bi-three-dots-vertical"></i>
			</button>
			<ul className="dropdown-menu" aria-labelledby={id}>
				<li>
					<h6 className="dropdown-header">Acciones</h6>
				</li>
				<li>
					<button className="dropdown-item" type="button">
						<i className="bi bi-pen text-primary me-2"></i>
						Editar
					</button>
				</li>
				<li>
					<button className="dropdown-item" type="button">
						<i className="bi bi-trash text-danger me-2"></i>
						Eliminar
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
