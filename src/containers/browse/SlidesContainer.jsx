import React from "react";
import RowContainer from "./RowContainer";
import {useData} from "../../context/DataContext";

function SlidesContainer() {
  const {moviesByGenre, top10Movies} = useData();
  console.log();
  return (
    <>
      <RowContainer
        title="Top 10 Movies in Canada Today"
        items={top10Movies}
        rankRow
      />

      {moviesByGenre.map((row) => (
        <RowContainer
          title={row.title}
          items={row.items}
          key={row.id}
          rankRow={false}
        />
      ))}
    </>
  );
}

export default SlidesContainer;
