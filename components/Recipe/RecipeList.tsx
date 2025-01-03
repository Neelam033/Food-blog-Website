import React, { FC } from "react";
import { IPost, RecipeListItem } from "../../types/recipe.interface";
import RecipeCard from "./RecipeCard";
import LoadingBlock from "../LoadingBlock/LoadingBlock";
import Pagination from "../UI/Pagination/Pagination";

const RecipeList: FC<RecipeListItem> = ({
  data,
  totalRecipes,
  loading,
  isError,
  paginate,
  handleDelete = () => {},
  handleEdit = () => {},
}) => {
  const recipesPerPage = 6;

  if (loading) {
    return <LoadingBlock type="loading" message="Loading..." />;
  }

  if (isError) {
    return (
      <LoadingBlock
        type="error"
        message="Something went wrong, please retry later"
      />
    );
  }

  return data.length !== 0 ? (
    <>
      <div className="mt-6 recipe_layout w-full">
        {data.map((post: IPost) => (
          <RecipeCard
            key={post._id}
            post={post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={totalRecipes}
        paginate={paginate}
      />
    </>
  ) : (
    <p className="my-10 text-xl">There are no posts yet.</p>
  );
};

export default RecipeList;
