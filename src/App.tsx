import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import CommentList from "./components/CommentList";
import CommentLayout from "./components/CommentLayout";
import Comment from "./components/Comment";
import { useQuery } from "react-query";
import { GET_Comments } from "./controllers/comments.controller";

function App() {
	const { data: comments, isLoading } = useQuery(["comments"], GET_Comments);

	return (
		<Container className="my-4">
			<Routes>
				<Route
					path="/"
					element={<CommentList comments={comments} isLoading={isLoading} />}
				></Route>
				<Route path="/:id" element={<CommentLayout comments={comments} />}>
					<Route index element={<Comment />}></Route>
				</Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Routes>
		</Container>
	);
}

export default App;
