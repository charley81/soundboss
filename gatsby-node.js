const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRooms {
      allContentfulRooms {
        nodes {
          id
          name
          price
          equipment {
            list
          }
          image {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  result.data.allContentfulRooms.nodes.forEach(room => {
    createPage({
      path: `/${room.name}`,
      component: path.resolve(`src/templates/room-template.js`),
      context: {
        name: room.name,
      },
    })
  })
}
