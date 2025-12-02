import QueryBuilder from "../../builder/queryBuilder";
import { Editor } from "./editor.model";

const allEditorsFromDB = async (query: Record<string, unknown>) => {
  const adminQuery = new QueryBuilder(
    Editor.find().populate("user", "role password status needsPasswordChange"),
    query
  )
    .search([])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await adminQuery.countTotal();
  const data = await adminQuery.modelQuery;

  return { meta, data };
};

export const EditorServices = {
  allEditorsFromDB,
};
