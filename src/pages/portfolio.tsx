import { graphql , PageProps } from "gatsby"
import React from "react"
import LayoutWithHeader from "../../components/layout/LayoutWithHeader";
import './portfolio.scss';

// ZedX: https://www.facebook.com/zedxinc
// Microsoft
// Prophetic Sky
// Skyward Apps

export default function Portfolio(props:PageProps) {
	const query = (props.data as any);
  return <LayoutWithHeader>
	  <div className='portfolioContent' key='portfolioContent'>
		<aside>Timeline</aside>
		<main>Experience
			{query.allMarkdownRemark.nodes.map(node => <section>
				<h1 key={node.frontmatter.title}>{node.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{__html:node.html}}></div>
			</section>)}
		</main>
	  </div>
  </LayoutWithHeader>;
}

export const query = graphql`
query {
	allMarkdownRemark {
	  nodes {
		id
		tableOfContents
		excerpt
		frontmatter {
		  enddate
		  key
		  startdate
		  thumbnail
		  title
		}
		headings {
		  id
		}
		html
		rawMarkdownBody
	  }
	}
  }
`