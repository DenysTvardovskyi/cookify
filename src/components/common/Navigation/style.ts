import { createUseStyles } from 'react-jss';
import { theme } from '../../../theme';

export default createUseStyles(() => ({
  navigation: {
    width: '100%',
    minHeight: theme.navigationHeight,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  navWrapper: {
    alignItems: 'center',
    display: 'flex',
    gap: theme.margin.small,
  },
}));
