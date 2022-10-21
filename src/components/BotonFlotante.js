const BotonFlotante = ({ modalID }) => {
	return (
		<div className="fixed-bottom container pb-4 text-end">
			<button
				type="button"
				className="btn btn-primary btn-lg rounded-circle"
				data-bs-toggle="modal"
				data-bs-target={"#" + modalID}
			>
				<i className="bi bi-plus fs-1"></i>
			</button>
		</div>
	);
};

export default BotonFlotante;
