import React from "react";

// function BackTotop() {
//   return (
//     // <!--Start of Back to Top -->
//     <div mode='dark_mode'>
//     <div class="Back_to_Top">
//       <a href="#PStart">
//         <img src="./Back to Top.png" alt="" />
//       </a>
//     </div></div>
//   );
// }

// export default BackTotop;


class BackTotop extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={className1:'test',
    className2:'Back_to_Top'
  }



}

render() {
    return (
    // <!--Start of Back to Top -->
    <div mode='dark_mode'>
    <div className={this.state.className2}>
      <a href="#PStart">
        <img src="./Back to Top.png" alt="" />
      </a>
    </div></div>

      );
    }
}

   
      export default BackTotop;
      