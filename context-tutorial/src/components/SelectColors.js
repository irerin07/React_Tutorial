import React, { Component } from "react";
import ColorContext from "../contexts/color";
// import React from "react";
// import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = subColor => {
    this.context.actions.setSubColor(subColor);
  };

  render() {
    return (
      <div>
        <h2>Select a color</h2>
        <div style={{ display: "flex" }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer"
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

// const SelectColors = () => {
//   return (
//     <div>
//       <h2>Select a color</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map(color => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer"
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={e => {
//                   e.preventDefault();
//                   actions.setSubColor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// };

export default SelectColors;
