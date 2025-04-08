// import Input from "@/components/Input";
// import Button from "@/components/Button";
// import Title from "@/components/Title";


// import { B } from "@/components/B";

// export default function Home() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",

//         alignItems: "center",
//         height: "100vh"
//       }}
//     >
//   <Title/>
//       <div
//         style={{
//           height: 396,
//           width: 396,
//           border: "0.5px solid grey",
//           borderRadius: "4px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 10,
//           padding: "20px"
//         }}

//       >

//         <Input border="0.5px solid grey" placeholder="Email or phone number" />
//         <Input border="0.5px solid grey" placeholder="Password" />

//         <Button
//           text="Log In"
//           backgroundColor="#1877f2"
//           color="white"
//           width="364px"
//         />
//         <Button
//           text="Forget password"
//           backgroundColor="white"
//           color="#1877f2"
//           width="364px"
//         />
//         <div style={{ borderTop: "0.5px solid grey", width: 364 }}></div>
//         <Button
//           text="Create new account"
//           backgroundColor="#42b72a"
//           color="white"
//           width="194px"
//         />
//       </div>
//     </div>
//   );
// }


// import { A } from "@/components/A"; 

// const Home = () => {
//   const gene = "Inherited Gene from Amcestors";
//   const color = "green";
//   const font = "25px";
//   return (
//     <div>
//       <img alt="x972fbf xcfux6l x1qhh985 xm0m39n xk390pu xns55qn xu96u03 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x10l6tqk x13vifvy x11njtxf xqyf9gi x1hc1fzr x1rkc77x x19991ni x1lizcpb xnpuxes xhtitgo" 
//       src="/images/instagram/xig/homepage/screenshots/screenshot1.png?__d=www"/>
//       <A gene={gene} color={color} font={font}/>
//     </div>
//   );
// };
// export default Home;

import { A } from "@/components/A";
import photo from "../images/img1.png"; 
import B from "@/components/B";
import C from "@/components/C";
import D from "@/components/D";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div 
       style={{height:"600px", width: "400px", border:"0.5px solid grey"}}>
        <img src={photo} alt="Image 1" /> {}
      </div>
      <div 
        style={{display:"flex",
        flexDirection:"column",
        alignItems:"center",
        // justifyContent:'center',
        gap:"10px",
        height: "400px", 
        width:"349px", 
        border: "0.5px solid grey"}}>
          <p className="logo">instagram</p>
          <A placeholder = "  Phone number, user name or email" 
          height="38px"/>
          <A placeholder = "  Password" 
          height="38px"/>
          <B width="262px"
            text="Log In"
            color="white"/>
          <C/>  
          <D width="262px"
             text="Log in with Facebook"
             color="#0095F6"
             backgroundColor="transparent"
             />
           
        </div>
    </div>
  );
}



