// import React from "react";
// import "./Babel.scss";

// export default function Babel() {
//   function getDefaultProps() {
//     return { image: "http://i.giphy.com/l117HrgEinjIA.gif" };
//   }

//   function render() {
//     return (
//       <div className="FourOhFour">
//         <div
//           className="bg"
//           style={{ backgroundImage: "url(" + this.props.image + ")" }}
//         />
//         <div className="code">404</div>
//       </div>
//     );
//   }

//   return (
//     <div id="app">

//     </div>
//   );
// }
import React from "react";
import "./Babel.scss";

export default function Babel() {
  return (
    <div className="app">
      <form>
        <div className="FourOhFour">
          <div
            className="bg"
            style={{
              backgroundImage: "url(http://i.giphy.com/l117HrgEinjIA.gif)"
            }}
          />
          <div className="code">404</div>
        </div>
      </form>
    </div>
  );
}
