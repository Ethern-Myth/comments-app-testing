import { Col, Row } from "react-bootstrap";
import CommentCard from "./CommentCard";

type CommentListProps = {
	isLoading: boolean;
	comments: [];
};

function CommentList({ comments, isLoading }: CommentListProps) {
	if (isLoading) return <h3>Loading ...</h3>;

	return (
		<>
			<Row className="align-items-center mb-4">
				<Col>
					<h1>Comments</h1>
				</Col>
			</Row>
			<Row xs={1} sm={2} lg={3} xl={4} className="g-3">
				{comments.map((comment: any) => (
					<Col key={comment.id}>
						<CommentCard
							id={comment.id}
							name={comment.name}
							body={comment.comment}
						/>
					</Col>
				))}
			</Row>
		</>
	);
}

export default CommentList;
