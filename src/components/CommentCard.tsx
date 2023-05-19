import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/style.module.css";

export type SimplifiedCommentProps = {
	name: string;
	body: string;
	id: string;
};

function CommentCard({ id, name, body }: SimplifiedCommentProps) {
	return (
		<Card
			as={Link}
			to={`/${id}`}
			className={`h-100 text-reset text-decoration-none ${styles.card}`}
		>
			<Card.Body>
				<Stack
					gap={2}
					className="align-items-center justify-content-center h-100"
				>
					<Badge className="text-truncate" key={id}>
						{name}
					</Badge>
					<p className="mt-1 text-truncate">{body}</p>
				</Stack>
			</Card.Body>
		</Card>
	);
}

export default CommentCard;
