declare global {
  type CommentType = {
    _id: string;
    user: string;
    parentId?: string | null;
    userImg: string;
    comment: string;
    createdAt?: string;
  };
}
export = {};
