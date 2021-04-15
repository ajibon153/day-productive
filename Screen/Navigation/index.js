import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { ViewNotes, AddNotes } from '../../noteList';

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
    },
    AddNotes: {
      screen: AddNotes,
    },
  },
  {
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode: 'modal',
  }
);

export default createAppContainer(StackNavigator);
