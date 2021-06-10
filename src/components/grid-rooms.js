// import React from "react"
// import { Title } from "../components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { css } from "@emotion/react"
// import { Link } from "gatsby"

// const GridRooms = ({ rooms, title }) => {
//   return (
//     <section
//       className="section"
//       css={css`
//         .room-link {
//           cursor: pointer;
//         }

//         .section-content {
//           display: grid;
//           max-width: var(--max-width);
//           gap: 1rem;
//           /* safari workaround */
//           grid-gap: 1rem;
//           grid-template-rows: 300px 300px;
//           grid-auto-rows: 300px;
//         }

//         .room-image {
//           height: 100%;
//           border-radius: var(--border-radius);
//           transition: var(--transition);
//         }

//         article {
//           position: relative;
//           overflow: hidden;
//           border-radius: var(--border-radius);
//           background: var(--color-primary);
//           height: 100%;

//           &:hover .room-image {
//             opacity: 0.2;
//             box-shadow: var(--box-shadow);
//           }

//           &:hover .room-info {
//             opacity: 1;
//           }
//         }

//         .room-info {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           color: var(--color-light);
//           width: 100%;
//           transition: var(--transition);
//           text-align: center;
//           opacity: 0;

//           h3 {
//             margin: 1rem 0;
//           }
//         }

//         .btn-wrap {
//           margin-top: 2rem;
//           text-align: center;
//         }

//         @media screen and (min-width: 768px) {
//           .section-content {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         @media screen and (min-width: 992px) {
//           .section-content {
//             grid-template-columns: 1fr 1fr 1fr;
//             grid-template-rows: 250px 250px;
//             grid-auto-rows: 250px;
//           }
//         }

//         @media screen and (min-width: 1200px) {
//           .section-content {
//             grid-template-areas:
//               "a b b"
//               "a c d";
//           }

//           .article-0 {
//             grid-area: a;
//           }
//           .article-1 {
//             grid-area: b;
//           }
//           .article-2 {
//             grid-area: c;
//           }
//           .article-3 {
//             grid-area: d;
//           }
//         }
//       `}
//     >
//       {/* title section */}
//       <Title title={title || "Rooms"} />
//       <p className="tagline">
//         click a image to view <span className="name">SoundBoss</span> room
//         info...
//       </p>

//       {/* image and hover content */}
//       <div className="section-content" id="rooms">
//         {rooms.map((room, index) => {
//           const { id, recordId } = room
//           const { name, type } = room.data
//           const image = room.data.image.localFiles[0]

//           return (
//             <Link
//               to={`/${recordId}`}
//               key={id}
//               className={`room-link article-${index}`}
//             >
//               <article className={`article-${index}`}>
//                 <GatsbyImage
//                   image={getImage(image)}
//                   alt={name}
//                   className="room-image"
//                 />
//                 <div className="room-info">
//                   <p>{type}</p>
//                   <h3>{name}</h3>
//                   <p className="click">Click For More Info</p>
//                 </div>
//               </article>
//             </Link>
//           )
//         })}
//       </div>

//       {/* go to all rooms page */}
//       <div className="btn-wrap">
//         <Link to="/rooms" className="btn">
//           All Rooms
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default GridRooms
