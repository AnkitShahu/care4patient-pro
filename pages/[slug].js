import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BlogSidebar, CommonHero } from '../components/components';
import { Box, Container, Grid } from '@mui/material';
import Banner1 from '../public/CommonHero/single-blog-1.jpg'
import Banner2 from '../public/CommonHero/blog-3-0.jpg'
import Banner4 from '../public/CommonHero/blog-index-2.jpg'


const SingleBlog = ({ data, category, blogs }) => {
  const [filteredCat, setFilteredCat] = useState()
  const [show, setShow] = useState(false)
  const [randomBanner, setRandomBanner] = useState(1)
  const [blog] = data;
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (blog) {
      setFilteredCat(category.filter(entries => entries.id === blog.categories[0]))
    }
  }, [blog, category]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    setRandomBanner(random)
  }, [blog, slug]);

  if (router.isFallback) {
    return (<div>Loading...</div>)
  }

  const breadcrumb = [
    { id: "single_blog_bredcrumb_1", link: "/blog/", title: "Blog" },
    { id: "single_blog_bredcrumb_2", link: `/category/${filteredCat ? filteredCat[0] ? filteredCat[0].slug ? filteredCat[0].slug : null : null : null}/`, title: `${filteredCat ? filteredCat[0] ? filteredCat[0].name ? filteredCat[0].name : null : null : null}` },
    { id: "single_blog_bredcrumb_3", link: null, title: `${blog ? blog.title ? blog.title.rendered ? blog.title.rendered : null : null : null}` },
  ];

  const Banner = [Banner1, Banner2, Banner4]

  return (
    <>
      {
        show ? <>
          {
            blog ? <>
              <Head>
                <title>{blog.yoast_head_json ? blog.yoast_head_json.title ? blog.yoast_head_json.title : null : null}</title>
                <meta name="description" content={blog.yoast_head_json ? blog.yoast_head_json.description ? blog.yoast_head_json.description : null : null} />
                <meta name="robots" content="index" />
                <link rel="canonical" href={`/blog/${blog.slug}/`} />
              </Head>
            </> : null
          }
          <CommonHero breadcrumb={breadcrumb} bg={Banner[randomBanner]} title={blog ? blog.title ? blog.title.rendered ? blog.title.rendered : null : null : null} color="#fff" />
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={8}>
                        <Box>
                          <img src={blog ? blog._embedded ? blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0] ? blog._embedded['wp:featuredmedia'][0].source_url ? blog._embedded['wp:featuredmedia'][0].source_url : null : null : null : null : null} alt={blog ? blog._embedded ? blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0] ? blog._embedded['wp:featuredmedia'][0].alt_text ? blog._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} className="img-fluid" />
                        </Box>
                        <Box mt={3} dangerouslySetInnerHTML={{ __html: blog ? blog.content ? blog.content.rendered ? blog.content.rendered : null : null : null }} />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <BlogSidebar blogs={blogs.slice(0, 5)} cat={category} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : null
      }
    </>
  )
}

export default SingleBlog

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const res = await fetch(`https://pritams3.sg-host.com/wp-json/wp/v2/posts?_embed=true&slug=${slug}`);
  const data = await res.json()
  const catRes = await fetch('https://pritams3.sg-host.com/wp-json/wp/v2/categories?_embed=true&per_page=99')
  const category = await catRes.json();
  const blogRes = await fetch('https://pritams3.sg-host.com/wp-json/wp/v2/posts?_embed=true');
  const blogs = await blogRes.json()

  return {
    props: {
      data,
      category,
      blogs
    },
  }
}