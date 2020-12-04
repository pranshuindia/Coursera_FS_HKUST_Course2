// import {Media} from "reactstrap";
// import {baseUrl} from "../shared/baseUrl";
// import {Fade} from 'react-animation-components';
//
// function RenderLeader({leader}) {
//     return (
//         <Media tag="li">
//             <Media left middle>
//                 <Media object src={baseUrl + leader.image} alt={leader.name}/>
//             </Media>
//             <Media body className="ml-5">
//                 <Media heading>{leader.name}</Media>
//                 <p>{leader.designation}</p>
//                 <p>{leader.description}</p>
//             </Media>
//         </Media>
//     )
// }
//
// const Leader = (props) => {
//     const leader = props.leaders.map((leader) => {
//         return (
//             <div key={leader.id} className="col-12 mt-5">
//                 <Fade in>
//                     <RenderLeader leader={leader}/>
//                 </Fade>
//             </div>
//         )
//     })
//     return (
//         <div>
//             {leader}
//         </div>
//     )
// }
//
// export default Leader;
