require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 });

module.exports = {
    plugins: [
      {
         resolve: `gatsby-source-contentful`,
         options: {
           spaceId: 'zz9kiu500yrs',
           // Learn about environment variables: https://gatsby.dev/env-vars
           accessToken: 'c-36VnEYbUA2r0uoH_wS4M2NwsQfTMvEKvZU9qiL8JU',
         },
       },
       'gatsby-plugin-sass',
       'gatsby-plugin-styled-components',
       'gatsby-plugin-web-font-loader',
       'gatsby-plugin-image'
    ],
    pathPrefix: "/BlogHub",
}