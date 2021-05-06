import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar/index.jsx";

const HomeAndProductDetailPage = (props) => {
  return (
		<>
      <Navbar routeProps={props.routeProps} />
      {props.children}
		</>
	);
};

// This is an Higher-Order-Component
export default function SaiGonSneakers({Component, ...props}) {
	return (
    <Route
      {...props}
      render={(routeProps) => {
        return (
          <HomeAndProductDetailPage routeProps={routeProps}>
            <Component {...routeProps} />
          </HomeAndProductDetailPage>
        )
      }}
		/>
	);
}
