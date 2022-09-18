import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
  return (
    <div>
      <main>
        {posts.map((items) => {
          return(
            <Article key={items.id} title={items.title} date={items.date} preview={items.preview}/>
          )
        })}
      </main>
    </div>
  );
};

export default ArticleList;