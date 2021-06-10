// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise(async resolve => {
//     const result = await graphql(`
//       {
//         allAirtable {
//           edges {
//             node {
//               table
//               recordId
//               data {
//                 equipment
//                 name
//                 price
//                 image {
//                   localFiles {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `)

//     result.data.allAirtable.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.recordId}`,
//         component: path.resolve(`./src/templates/room-template.js`),
//         context: {
//           recordId: node.recordId,
//         },
//       })
//     })
//     resolve()
//   })
// }
