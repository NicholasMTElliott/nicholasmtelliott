import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql , PageProps } from "gatsby"
import React from "react"
import LayoutWithHeader from "../../layout/LayoutWithHeader";
import './portfolio.scss';
import * as icons from '../../utils/icons';
// ZedX: https://www.facebook.com/zedxinc
// Microsoft
// Prophetic Sky
// Skyward Apps

export default function Portfolio(props:PageProps) {
	const query = (props.data as any);
  return <LayoutWithHeader>
	  <div className='portfolioContent' key='portfolioContent'>
		<aside>
			<div className='gutter'/>
			  <div className='timeline'>
				  {query.allMarkdownRemark.nodes.map(node =>
				  {
					  const startDate = new Date(node.frontmatter.startdate);
					  const endDate = new Date(node.frontmatter.enddate);
					  return <section>
						  <a href={'#'+node.frontmatter.key}>
							<h4 key={node.frontmatter.title}>{node.frontmatter.title}</h4>
							{startDate.getMonth()+1}/{startDate.getFullYear()} - {endDate.getMonth()+1}/{endDate.getFullYear()}
							<div className='notch'>
								<FontAwesomeIcon icon={icons.faCircle} />
							</div>
						  </a>
					  </section>;
				  })}
			  </div>
		</aside>
		<main>Experience
			{query.allMarkdownRemark.nodes.map(node => <section>
				<h1 id={node.frontmatter.key} key={node.frontmatter.key}>{node.frontmatter.title}</h1>
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