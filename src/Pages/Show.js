/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import ShowMainData from '../components/show/ShowMainData';
import Seasons from '../components/show/Seasons';
import { ShowPageWrapper, InfoBlock } from './Show.styled';
import { useShow } from '../misc/Custom-Hooks';

function Show() {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error Occured:{error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          netwrok={show.netwrok}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
}

export default Show;
