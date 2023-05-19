import { useComment } from "./CommentLayout";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkDown from "react-markdown";

function Comment() {
	const comment = useComment();
	return (
		<>
			<Row className="align-items-center mb-4">
				<Col>
					<h1>Comment</h1>
					<p>
						<i>
							Comment by: {comment.name} on {comment.created_at}
						</i>
					</p>
				</Col>
				<Col xs="auto">
					<Stack gap={2} direction="horizontal">
						<Link to="/">
							<Button variant="outline-secondary">Back</Button>
						</Link>
					</Stack>
				</Col>
			</Row>
			<ReactMarkDown>{comment.comment}</ReactMarkDown>
		</>
	);
}

export default Comment;
