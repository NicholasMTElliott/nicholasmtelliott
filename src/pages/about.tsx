import React from "react";
import { Link, PageProps } from "gatsby";

export default function About(props:PageProps) {
  return <div>About this site {props.path} 
  <Link to='/' >Home</Link>
  </div>;
}
