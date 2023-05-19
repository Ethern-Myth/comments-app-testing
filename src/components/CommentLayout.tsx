import {
	Navigate,
	Outlet,
	useOutletContext,
	useParams,
} from "react-router-dom";
import { Comment } from "../models/Comment.model";

type CommentLayoutProps = {
	comments: Comment[];
};

function CommentLayout({ comments }: CommentLayoutProps) {
	const { id } = useParams();
	const comment = comments.find((c) => c.id === Number(id));

	if (comment == null) return <Navigate to="/" replace />;
	return <Outlet context={comment} />;
}

export default CommentLayout;

export function useComment() {
	return useOutletContext<Comment>();
}
