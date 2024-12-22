import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<>
			<div className="bg-light p-5 rounded mb-4">
				<h1 className="text-center mb-4">Project Management System</h1>
				<div className="text-center mb-4">
					<p className="text-muted">Developed by Hamza Abdelli - TD47</p>
					<p className="text-muted">ESIEA 4A-IASD 2024-2025</p>
				</div>
				
				<div className="mb-4">
					<h5>About This Application</h5>
					<p>
						A comprehensive project management system built with MERN stack and GraphQL,
						containerized using Docker. This application allows you to manage clients
						and their associated projects efficiently.
					</p>
				</div>
			</div>

			<div className="d-flex gap-3 mb-4">
				<AddClientModal />
				<AddProjectModal />
			</div>
			<Projects />
			<hr />
			<Clients />
		</>
	);
}
