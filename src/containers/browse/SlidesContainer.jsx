import React from "react";
import RowContainer from "./RowContainer";
import {useData} from '../../context/DataContext'

function SlidesContainer() {

  const {moviesByGenre} = useData();
  return (
    <>
    {moviesByGenre.map((row) => (
      <RowContainer title={row.title} items={row.items} key={row.id}/>
    ))}
    </>
  );
}

export default SlidesContainer;
