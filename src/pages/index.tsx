import { Link, PageProps } from "gatsby"
import React from "react"
import LayoutWithHeader from "../../components/layout/LayoutWithHeader";
import './index.scss';

export default function Home(props:PageProps) {
  return <LayoutWithHeader>
      Hello world! {props.path} 
      <Link to='/about' >About us</Link>
  </LayoutWithHeader>;
}
