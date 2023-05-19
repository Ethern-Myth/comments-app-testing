export type Comment = {
	id: number;
} & CommentData;

export type CommentData = {
	name: string;
	comment: string;
	created_at: string;
	updated_at: string;
};
