import React, { Component } from "react";
import PropTypes from "prop-types";
import NodeEditor from "./NodeEditor";
import { Globe } from "styled-icons/fa-solid/Globe";

export default class SceneNodeEditor extends Component {
  static propTypes = {
    editor: PropTypes.object,
    node: PropTypes.object
  };

  static iconComponent = Globe;

  static description = "The root object of the scene.";

  render() {
    return <NodeEditor {...this.props} description={SceneNodeEditor.description} />;
  }
}
