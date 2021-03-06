
import {FC} from "react" ; 
import Particles from "react-particles-js";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.scss" ;



export interface LayoutProps{
}

const Layout :FC<LayoutProps> = ({children})=>{
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
      {/* <Snow/> */}
    </div>
  )
} 

export default Layout ;

// function Snow(){
//   return (
//     <Particles
//       className={[
//         "particles-snow",
//         styles.snow
//       ].join(" ")}
//       params={{
//         particles: {
//           number: {
//             value: 300,
//             density: {
//               enable: true,
//               value_area: 800
//             }
//           },
//           color: {
//             value: "#ffffff"
//           },
//           shape: {
//             type: "circle",
//             stroke: {
//               width: 0,
//               color: "#B3B3B3"
//             },
//             polygon: {
//               nb_sides: 5
//             }
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false
//             }
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: false,
//             speed: 40,
//             size_min: 0.1,
//             syno: false
//           },
//           line_linked: {
//             enable: false,
//             distance: 150, 
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 1
//           },
//           move: {
//             enable: true,
//             speed: 2,
//             direction: "bottom",
//             random: false,
//             out_mode: "out",
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200
//             }
//           }
//         }
//       }}
//     />
//   ) ;
// }

