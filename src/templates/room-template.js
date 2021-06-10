// import React from "react"
// import { graphql } from "gatsby"
// import { Layout, Title, Contact, Info, Seo } from "../components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { css } from "@emotion/react"

// const RoomTemplate = ({ data }) => {
//   const { name, equipment, price, image } = data.airtable.data
//   return (
//     <Layout>
//       <Seo title={name} description={`${name} at SoundBoss Studios`} />
//       <section
//         className="section"
//         css={css`
//           .img {
//             height: 40vh;
//             border-radius: var(--border-radius);
//           }

//           .room-info {
//             margin-bottom: 4rem;
//           }

//           .info {
//             h4 {
//               color: var(--color-primary);
//               font-size: 2rem;
//               font-weight: 300;
//               margin-top: 1rem;
//             }

//             @media screen and (min-width: 768px) {
//               display: flex;
//               justify-content: space-between;

//               h4 {
//                 margin-top: 0;
//               }
//             }
//           }

//           .equipment {
//             h4 {
//               font-size: 2rem;
//               font-weight: 300;
//             }

//             li {
//               margin: 1rem 0;
//               border-bottom: 1px dotted var(--color-dark);
//               padding-bottom: 0.25rem;
//               text-transform: uppercase;
//             }
//           }

//           .equipment-items {
//             margin-top: 2rem;
//           }
//         `}
//       >
//         {/* image */}
//         <GatsbyImage
//           image={getImage(image.localFiles[0])}
//           alt={name}
//           className="img"
//         />

//         <section className="section">
//           {/* room info */}
//           <div className="room-info">
//             <div className="info">
//               <Title title={name} />
//               <h4>${price}/hr</h4>
//             </div>
//             <p className="tagline">
//               call today to book a session in{" "}
//               <span className="name">{name}</span>
//             </p>
//           </div>

//           {/* equipment */}
//           <div className="equipment">
//             <h4>Equipment:</h4>
//             <ul className="equipment-items">
//               {equipment.map((item, index) => {
//                 return <li key={index}>{item}</li>
//               })}
//             </ul>
//           </div>

//           {/* contact component */}
//           <Contact />

//           {/* info component */}
//           <Info />
//         </section>
//       </section>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query GetRoomInfo($recordId: String) {
//     airtable(recordId: { eq: $recordId }, table: { eq: "Rooms" }) {
//       id
//       table
//       recordId
//       data {
//         name
//         equipment
//         price
//         image {
//           localFiles {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default RoomTemplate
