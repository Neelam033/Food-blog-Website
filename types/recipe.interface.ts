import { ReactNode } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

export interface IPostComment {
  rating: number;
  text: string;
  creatorName: string;
  date: string;
  postId: string;
  _id: string;
}

export interface IPost {
  title: string;
  description: string;
  tag: string;
  ingredients: string[];
  photo: {
    imageLink: string;
    base64: string;
  };
  steps: string[];
  _id: string | undefined | null;
  time?: ReactNode;
  comments: IPostComment[];
  servings: {
    servings: string;
    yield: string;
  };
  timeToDo: { prepTime: string; cookTime: string };
  nutrition: {
    cal: string;
    protein: string;
    carbs: string;
    fats: string;
  };
  creator:
    | {
        name: string;
        email: string;
        image: string;
        _id: string;
      }
    | undefined
    | null;
}

export interface RecipeData {
  name: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  servings: string;
  yield: string;
  prepTime: string;
  cookTime: string;
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  photo: string;
  tag: string;
}

export interface RecipeFormProps {
  type: string;
  onSubmit: SubmitHandler<FieldValues>;
  form: UseFormReturn<FieldValues>;
  submitError?: string;
}

export interface RecipeCommentProps {
  item: IPostComment;
  name?: string | null | undefined;
  deleteComment: (id: string) => void;
}

export interface RecipeListItem {
  data: IPost[];
  totalRecipes: number;
  loading: boolean;
  isError: boolean;
  paginate: (number: number) => void;
  handleEdit?: (post: IPost) => void;
  handleDelete?: (post: IPost) => void;
}
