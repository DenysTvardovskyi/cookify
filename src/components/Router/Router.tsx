import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withCheckAuthorization } from "../../hocs";
import * as Page from "../../pages";

interface IProps {}

const PageProfileWithCheckAuthorization = withCheckAuthorization(Page.Profile);
const PageMainWithCheckAuthorization = withCheckAuthorization(Page.Home);

export const Router: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Landing />} />
        <Route path="/sign-in" element={<Page.SignIn />} />
        <Route path="/profile" element={<PageProfileWithCheckAuthorization />} />
        <Route path="/home" element={<PageMainWithCheckAuthorization />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};