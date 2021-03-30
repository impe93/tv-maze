import 'react-native-gesture-handler';

import React from 'react';
import {container, ContainerContext} from './services/ioc/ContainerContext';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {SafeAreaView, ScrollView} from 'react-native';
import {ShowListElement} from './features/show-list/ShowListElement';
import {Show} from './features/show-list/show.models';

const App = () => {
  const parsedMovie: Show = JSON.parse(movie);

  return (
    <ContainerContext.Provider value={container}>
      <Provider store={store}>
        <SafeAreaView>
          <ScrollView>
            <ShowListElement
              show={parsedMovie}
              onPress={() => console.log(parsedMovie.image.medium)}
            />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </ContainerContext.Provider>
  );
};

const movie = `
{
  "id": 8,
  "url": "https://www.tvmaze.com/shows/8/glee",
  "name": "Glee",
  "type": "Scripted",
  "language": "English",
  "genres": [
      "Drama",
      "Music",
      "Romance"
  ],
  "status": "Ended",
  "runtime": 60,
  "premiered": "2009-05-19",
  "officialSite": "http://www.fox.com/glee",
  "schedule": {
      "time": "21:00",
      "days": [
          "Tuesday"
      ]
  },
  "rating": {
      "average": 6.8
  },
  "weight": 64,
  "network": {
      "id": 4,
      "name": "FOX",
      "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
      }
  },
  "webChannel": null,
  "externals": {
      "tvrage": 21704,
      "thetvdb": 83610,
      "imdb": "tt1327801"
  },
  "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg"
  },
  "summary": "<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>",
  "updated": 1596170118,
  "_links": {
      "self": {
          "href": "https://api.tvmaze.com/shows/8"
      },
      "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/142185"
      }
  }
}
`;

export default App;
