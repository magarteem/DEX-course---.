import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignInForm } from "./autharization/SignInForm";
import { SignUpForm } from "./autharization/SignUpForm";
import { General } from "./general/General";
import { CardsTeam } from "../modules/teams/components/CardsTeam";
import { CardsPlayer } from "../modules/players/components/CardsPlayer";
import { useAppSelector } from "../core/redux/app/hooks";

export const Routers = () => {
  const isAuth = useAppSelector((state) => state.signInSliseReduser.isAuth);

  return (
    <>
      {
        <Routes>
          {isAuth ? (
            <Route path="/*" element={<General />}>
              <Route index element={<CardsTeam />} />
              <Route path="player" element={<CardsPlayer />} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="login" element={<SignInForm />} />
              <Route path="registration" element={<SignUpForm />} />
              <Route path="*" element={<div>404</div>} />
            </Route>
          )}
        </Routes>
      }
    </>
  );
};

//  <Route index element={<SignInForm />} />
//  <Route path="sign-up" element={<SignUpForm />} />

//<Routes>
//<Route path="/*" element={<Main />} />

//<Route path="/nav" element={<Layout />}>
//  <Route index element={<Row1 />} />
//  <Route path="b" element={<Row2 />} />
//  <Route path="c" element={<Row3 />} />
//</Route>

//<Route path="nav-new/*" element={<Row1NEW />}>
//  <Route index element={<p>Default_</p>} />
//  <Route path="a" element={<InRow1NEW />} />

//  <Route path="b/*" element={<InRow2NEW />}>
//    <Route index element={<p>Default_ row2</p>} />
//    <Route path="inn1-row" element={<InRow2NEWInner />} />
//    <Route path="inn2-row" element={<p>Default_ row3</p>} />
//    <Route path="inn3-row" element={<p>Default_ row4</p>} />
//  </Route>

//  <Route path="c" element={<InRow3NEW />} />
//</Route>

//<Route path="dynamic-url" element={<DynamicUrl />} />
//<Route path="dynamic-url/:id" element={<DynamicWithID />} />
//<Route path="dynamic-url/:id/edit-post" element={<EditPost />} />
//<Route path="dynamic-url/new-post" element={<CreatePost />} />

//<Route path="memo" element={<MemoUseCalback />} />
//<Route path="*" element={<NotFound />} />
//</Routes>

/*<Routes>
        <Route path="/" element={auth ? <General /> : <SignInForm />} />
        <Route>
          <Route path="in" element={<SignInForm />} />
          <Route path="up" element={<SignUpForm />} />
        </Route>
      </Routes>*/
