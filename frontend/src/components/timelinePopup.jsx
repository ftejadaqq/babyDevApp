// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "../styles/timelinePopup.css";

// class TimelinePopup extends Component {
//   render() {
//     console.log(this.props.daysOld);

//     // returns one result, but the result is in an array
//     // so you have to include element 0 "data[0]"
//     // we use the filter method, but we only ever expect one result
//     const data = this.props.popupContent.filter((item) => {
//       return item.daysOld === this.props.daysOld;
//     });
//     console.log(data, this.props.popupContent);

//     return (
//       <>
//         <div className="popup-page">
//           <div className="popup-container">
//             <h1>Tip of the month</h1>
//             <p>{data[0].title}</p>
//             <p>{data[0].text}</p>
//             <p>
//               <a href={data[0].link}>link</a>
//             </p>
//             <p
//               className="popup-exit"
//               onClick={() =>
//                 this.props.dispatch({ type: "SET_TIMELINE_POPUP_ACTIVE" })
//               }
//             >
//               X
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     daysOld: state.daysOld,
//     popupContent: state.popupContent,
//     // this is where what I want from the store
//     // will go
//   };
// }

// export default connect(mapStateToProps)(TimelinePopup);
// // this says, here is my component and here is what part
// // of the store I require
