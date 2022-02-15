import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../contextProvider/ContextProvider";
import { SignInForm } from "./pages/autharization/SignInForm";
import { SignUpForm } from "./pages/autharization/SignUpForm";
import { General } from "./pages/general/General";
import { CardsPlayer } from "./pages/general/main/content/cards/CardsPlayer";
import { CardsTeam } from "./pages/general/main/content/cards/CardsTeam";

export const Routers = () => {
  const { auth, login }: any = useContext(Context);
  console.log(auth);

  return (
    <>
      {
        <Routes>
          {auth ? (
            <Route>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="login" element={<SignInForm />} />
              <Route path="registration" element={<SignUpForm />} />
            </Route>
          ) : (
            <Route path="/*" element={<General />}>
              <Route index element={<CardsTeam />} />
              <Route path="player" element={<CardsPlayer />} />
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
