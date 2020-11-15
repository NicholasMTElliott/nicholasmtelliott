import { Link, PageProps } from "gatsby"
import React from "react"
import LayoutWithHeader from "../../components/layout/LayoutWithHeader";
import './index.scss';

// ZedX: https://www.facebook.com/zedxinc
// Microsoft
// Prophetic Sky
// Skyward Apps

export default function Portfolio(props:PageProps) {
  return <LayoutWithHeader>
	  <div className='portfolioContent'>
		<aside>Timeline</aside>
		<section>Experience</section>
	  </div>
  </LayoutWithHeader>;
}
