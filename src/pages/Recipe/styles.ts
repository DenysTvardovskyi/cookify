import { createUseStyles } from 'react-jss';
import { theme } from '../../theme';

export default createUseStyles(() => ({
  recipeWrap: {
    display: 'flex',
    textAlign: 'center',
    gap: theme.padding.small,
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: `calc(100vh - ${theme.navigationHeight}px)`,
    padding: [theme.padding.large, 0],
  },

  imageWrap: {
    width: '100%',
    height: 500,
    position: 'relative',
  },

  like: {
    color: theme.colors.red.main,
  },

  ingredientsList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.margin.default,
  },

  ingredientsLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    width: 'auto',
    textTransform: 'capitalize',
    textDecoration: 'underline',
    '& >  img ': {
      width: 32,
      height: 32,
      marginRight: 5,
    },
  },

  actions: {
    display: 'flex',
    gap: theme.padding.small,
  },

  mainInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  steps: {
    textAlign: 'start',
  },
}));
