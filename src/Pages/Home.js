// import React, { useState } from 'react';
// import ActorGrid from '../components/actor/ActorGrid';
// import CustomRadio from '../components/CustomRadio';
// import MainPageLayout from '../components/MainPageLayout';
// import ShowGrid from '../components/show/ShowGrid';
// import { apiGet } from '../misc/Config';
// import { useLastQuery } from '../misc/Custom-Hooks';
// import {
//   RadioInputsWrapper,
//   SearchButtonWrapper,
//   SearchInput,
// } from './Home.Styled';

// function Home() {
//   const [input, setInput] = useLastQuery();
//   const [results, setResults] = useState(null);
//   const [searchOption, setSearchOption] = useState('shows');
//   const isShowsSearch = searchOption === 'shows';
//   const onSearch = () => {
//     apiGet(`/search/${searchOption}?q=${input}`).then(result => {
//       setResults(result);
//     });
//   };

//   const onInputChange = ev => {
//     setInput(ev.target.value);
//   };

//   const onKeyDown = ev => {
//     if (ev.keyCode === 13) {
//       onSearch();
//     }
//   };

//   const onRadioChange = ev => {
//     setSearchOption(ev.target.value);
//   };

//   // eslint-disable-next-line consistent-return
//   const renderResults = () => {

//     console.log('RESULTS',results);

//     if (results && results.length === 0) {
//       return <div>No Results</div>;
//     }
//     if (results && results.length > 0) {
//       return results[0].show ? (
//         <ShowGrid data={results} />
//       ) : (
//         <ActorGrid data={results} />
//       );
//     }
//     return null;
//   };
//   return (
//     <MainPageLayout>
//       <SearchInput
//         type="text"
//         placeholder="Search for something"
//         onChange={onInputChange}
//         onKeyDown={onKeyDown}
//         value={input}
//       />

//       <RadioInputsWrapper>
//         <div>
//           <CustomRadio
//             label="Shows"
//             id="shows-search"
//             value="shows"
//             checked={isShowsSearch}
//             onChange={onRadioChange}
//           />
//         </div>
//         <div>
//           <CustomRadio
//             label="Actors"
//             id="actors-search"
//             value="people"
//             checked={!isShowsSearch}
//             onChange={onRadioChange}
//           />
//         </div>
//       </RadioInputsWrapper>
//       <SearchButtonWrapper>
//         <button type="button" onClick={onSearch}>
//           Search
//         </button>
//       </SearchButtonWrapper>
//       {renderResults()}
//     </MainPageLayout>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
// import { apiGet } from '../misc/config';
import { apiGet } from '../misc/Config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { useLastQuery } from '../misc/Custom-Hooks';
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from './Home.Styled';
import CustomRadio from '../components/CustomRadio';

function Home (){
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const renderResults = () => {

// console.log('RESULTS',results);

    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
