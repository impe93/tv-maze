import React from 'react';
import {instance, mock, verify} from 'ts-mockito';
import {TestComponentBuilder} from '../../../../test/TestComponentBuilder';
import {fireEvent, render} from '@testing-library/react-native';
import {ShowElement, ShowElementNavigationProp} from '../ShowElement';

describe('Given a ShowElement component', () => {
  let TestComponent;
  let route;
  let navigation: ShowElementNavigationProp;

  beforeEach(() => {
    navigation = mock<ShowElementNavigationProp>();
    route = {
      params: {
        choosedShow: testShow,
      },
    };

    ({TestComponent} = TestComponentBuilder.fromComponent(
      <ShowElement navigation={instance(navigation)} route={route} />,
    ).build());
  });

  describe('When component has just been rendered', () => {
    it('Should render the show infos', () => {
      const {getByText} = render(<TestComponent />);
      getByText('Person of Interest (2011)');
      getByText('Action, Crime, Science-Fiction');
      getByText(summary);
    });
  });

  describe('When press on go back arrow button', () => {
    it('Should go back to the previous screen', () => {
      const {getByTestId} = render(<TestComponent />);
      const backButton = getByTestId('TVMaze__BackButton');
      fireEvent.press(backButton);
      verify(navigation.goBack()).once();
    });
  });
});

export const testShow = {
  id: 2,
  name: 'Person of Interest',
  genres: ['Action', 'Crime', 'Science-Fiction'],
  premiered: '2011-09-22',
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
  },
  summary:
    "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
};

const summary =
  "You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.";
