import React, { FC, useEffect, useReducer, useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Container, Footer, GridContainer, ImageContainer, Navigation } from '../../components';
import useStyles from './styles';
import { Link, useParams } from 'react-router-dom';
import { useApi } from '../../hooks';
import { IRecipe } from '../../models';

interface IProps {}

export const Recipe: FC<IProps> = (props: IProps): JSX.Element => {
  const classes = useStyles();

  let { id } = useParams();

  const api = useApi();
  const [recipe, setItem] = useState<IRecipe>();

  useEffect(() => {
    api.recipes
      .one({ recipeId: id, loader: 'Loading recipe...' })
      .then((recipe) => setItem(recipe));
  }, [id]);

  const userLiked = false;

  const date = new Date(recipe?.createdAt);

  return (
    recipe && (
      <>
        <Navigation />
        <Container>
          <div className={classes.recipeWrap}>
            <div>
              <h2>{recipe?.ukrainianTitle}</h2>
              <p>Опубліковано {date.toDateString()}</p>
            </div>
            <p>Категорія: {recipe?.category?.ukrainianName}</p>
            <Button variant='outlined' onClick={() => console.log('LIKE!')}>
              {userLiked ? <FavoriteIcon className={classes?.like} /> : <FavoriteBorderIcon />}{' '}
              {recipe?.likesCount}
            </Button>

            {recipe?.imageLink && (
              <div className={classes.imageWrap}>
                <ImageContainer>
                  <img src={recipe?.imageLink} alt={recipe?.title} />
                </ImageContainer>
              </div>
            )}
            <h5>Інгредієнти</h5>

            <div className={classes?.ingredientsList}>
              {recipe?.ingredients.map((item) => (
                <Link to={`/ingredients/${item?.ingredientId}`} key={item?.ingredientId}>
                  {item?.ukrainianName}
                </Link>
              ))}
            </div>

            <p className={classes.steps}>{recipe?.ukrainianInstruction}</p>
          </div>
        </Container>
        <Container>
          <GridContainer>
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </GridContainer>
        </Container>
        <Footer />
      </>
    )
  );
};
