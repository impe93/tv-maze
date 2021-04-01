import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {TestComponentBuilder} from '../../../../test/TestComponentBuilder';
import {Show} from '../show.models';
import {ShowListElement} from '../ShowListElement';

describe('Given a ShowListElement component', () => {
  let TestComponent;
  let onPress: jest.Mock<any, any>;

  beforeEach(() => {
    onPress = jest.fn();
  });

  describe('When component has just been rendered', () => {
    it('Should render title and main genre', () => {
      ({TestComponent} = TestComponentBuilder.fromComponent(
        <ShowListElement show={show} onPress={onPress} />,
      ).build());

      const {getByText} = render(<TestComponent />);
      getByText('Person of Interest');
      getByText('Action');
    });

    describe('When there is no genre in show infos', () => {
      it('Should render title and not the genre', () => {
        ({TestComponent} = TestComponentBuilder.fromComponent(
          <ShowListElement show={showWithNoGenre} onPress={onPress} />,
        ).build());

        const {getByText, queryByTestId} = render(<TestComponent />);
        getByText('Person of Interest');
        const subtitle = queryByTestId(
          `ShowListElement__${showWithNoGenre.id}`,
        );
        expect(subtitle).toBe(null);
      });
    });
  });

  describe('When tap on the show element', () => {
    it('Should navigate to the details page', () => {
      ({TestComponent} = TestComponentBuilder.fromComponent(
        <ShowListElement show={show} onPress={onPress} />,
      ).build());

      const {getByText} = render(<TestComponent />);
      const title = getByText('Person of Interest');
      fireEvent.press(title);
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});

const show: Show = {
  id: 2,
  url: 'https://www.tvmaze.com/shows/2/person-of-interest',
  name: 'Person of Interest',
  type: 'Scripted',
  language: 'English',
  genres: ['Action', 'Crime', 'Science-Fiction'],
  status: 'Ended',
  runtime: 60,
  premiered: '2011-09-22',
  officialSite: 'http://www.cbs.com/shows/person_of_interest/',
  schedule: {
    time: '22:00',
    days: ['Tuesday'],
  },
  rating: {
    average: 8.9,
  },
  weight: 94,
  network: {
    id: 2,
    name: 'CBS',
    country: {
      name: 'United States',
      code: 'US',
      timezone: 'America/New_York',
    },
  },
  webChannel: null,
  externals: {
    tvrage: 28376,
    thetvdb: 248742,
    imdb: 'tt1839578',
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
  },
  summary:
    "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
  updated: 1588773151,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/2',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/659372',
    },
  },
};

const showWithNoGenre: Show = {
  id: 2,
  url: 'https://www.tvmaze.com/shows/2/person-of-interest',
  name: 'Person of Interest',
  type: 'Scripted',
  language: 'English',
  genres: [],
  status: 'Ended',
  runtime: 60,
  premiered: '2011-09-22',
  officialSite: 'http://www.cbs.com/shows/person_of_interest/',
  schedule: {
    time: '22:00',
    days: ['Tuesday'],
  },
  rating: {
    average: 8.9,
  },
  weight: 94,
  network: {
    id: 2,
    name: 'CBS',
    country: {
      name: 'United States',
      code: 'US',
      timezone: 'America/New_York',
    },
  },
  webChannel: null,
  externals: {
    tvrage: 28376,
    thetvdb: 248742,
    imdb: 'tt1839578',
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
  },
  summary:
    "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
  updated: 1588773151,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/2',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/659372',
    },
  },
};
