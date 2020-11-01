import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="blog-title">
      <h1>Blog</h1>
    </div>
  </Layout>
)

export default BlogPage
