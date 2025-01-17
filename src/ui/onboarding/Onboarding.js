import React, { Component } from "react";
import PropTypes from "prop-types";
import OnboardingContainer from "./OnboardingContainer";
import OnboardingDialog from "./OnboardingDialog";
import OnboardingPopover from "./OnboardingPopover";
import { withEditor } from "../contexts/EditorContext";
import Icon from "../inputs/Icon";
import lmbIcon from "../../assets/onboarding/lmb.svg";
import rmbIcon from "../../assets/onboarding/rmb.svg";
import wasdIcon from "../../assets/onboarding/wasd.svg";
import HotkeyDescription from "./HotkeyDescription";
import translationVideo from "../../assets/onboarding/translation.mp4";
import translationImage from "../../assets/onboarding/translation.png";
import rotationVideo from "../../assets/onboarding/rotation.mp4";
import rotationImage from "../../assets/onboarding/rotation.png";
import scaleVideo from "../../assets/onboarding/scale.mp4";
import scaleImage from "../../assets/onboarding/scale.png";
import snappingVideo from "../../assets/onboarding/snapping.mp4";
import snappingImage from "../../assets/onboarding/snapping.png";
import { withApi } from "../contexts/ApiContext";
import { Button } from "../inputs/Button";
import Well from "../layout/Well";
import { cmdOrCtrlString } from "../utils";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

class CreateModelPopover extends Component {
  componentDidMount() {
    // TODO: Check if object was added
    this.props.editor.setSource("poly");
    this.props.editor.addListener("sceneGraphChanged", this.onObjectAdded);
  }

  onObjectAdded = () => {
    this.props.nextStep();
  };

  componentWillUnmount() {
    this.props.editor.removeListener("sceneGraphChanged", this.onObjectAdded);
  }

  render() {
    return (
      <OnboardingPopover target="#assets-panel" {...this.props} disableNext>
        Add a model to your scene by clicking on it.
      </OnboardingPopover>
    );
  }
}

const WrappedCreateModelPopover = withEditor(CreateModelPopover);

class SaveProjectDialog extends Component {
  componentDidMount() {
    this.props.api.addListener("project-saving", this.onProjectSaving);
  }

  onProjectSaving = () => {
    this.props.nextStep();
  };

  componentWillUnmount() {
    this.props.api.removeListener("project-saving", this.onProjectSaving);
  }

  render() {
    return (
      <OnboardingDialog {...this.props} disableNext>
        <h2>Saving and Publishing</h2>
        <h1>Saving Your Project</h1>
        <p>
          Before you navigate away from the page you&#39;ll want to save your work. You can do this by opening the menu
          and clicking Save Project or by pressing {cmdOrCtrlString} + S.
        </p>
        <Well>
          <HotkeyDescription action="Save Project">
            <div>{cmdOrCtrlString}</div>
            <div>S</div>
          </HotkeyDescription>
        </Well>
      </OnboardingDialog>
    );
  }
}

const WrappedSaveProjectDialog = withApi(SaveProjectDialog);

class SaveProjectPopover extends Component {
  componentDidMount() {
    this.props.api.addListener("project-saved", this.onProjectSaved);
  }

  onProjectSaved = () => {
    this.props.nextStep();
  };

  componentWillUnmount() {
    this.props.api.removeListener("project-saved", this.onProjectSaved);
  }

  render() {
    return (
      <OnboardingPopover target="#viewport-panel .toolbar" {...this.props} position="bottom" disablePrev disableNext>
        Press {cmdOrCtrlString} + S to save your project.
        <Well>
          <HotkeyDescription action="Save Project">
            <div>{cmdOrCtrlString}</div>
            <div>S</div>
          </HotkeyDescription>
        </Well>
      </OnboardingPopover>
    );
  }
}

const WrappedSaveProjectPopover = withApi(SaveProjectPopover);

class PublishScenePopover extends Component {
  componentDidMount() {
    this.props.api.addListener("project-published", this.onScenePublished);
  }

  onScenePublished = () => {
    this.props.nextStep();
  };

  componentWillUnmount() {
    this.props.api.removeListener("project-published", this.onScenePublishing);
  }

  render() {
    return (
      <OnboardingPopover target="#publish-button" {...this.props} position="bottom" disablePrev disableNext>
        Click to publish your scene.
      </OnboardingPopover>
    );
  }
}

const WrappedPublishScenePopover = withApi(PublishScenePopover);

const steps = [
  {
    render(props) {
      return (
        <OnboardingDialog {...props}>
          <h2>Introduction</h2>
          <h1>Welcome to Spoke</h1>
          <p>In this tutorial we&#39;ll go over how to create and publish a scene with Spoke.</p>
        </OnboardingDialog>
      );
    }
  },
  {
    component: WrappedCreateModelPopover
  },
  {
    render(props) {
      return (
        <OnboardingPopover target="#assets-panel" {...props} position="top" disablePrev>
          While the model is loading you&#39;ll see the loading indicator.
        </OnboardingPopover>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingPopover target="#viewport-panel .toolbar" {...props} position="bottom">
          <p>You can orbit around the scene by holding the left mouse button and dragging.</p>
          <p>You can also fly around the scene by holding the right mouse button and using the WASD keys.</p>
          <Well>
            <HotkeyDescription action="Orbit">
              <Icon src={lmbIcon} />
            </HotkeyDescription>
            <HotkeyDescription action="Fly">
              <Icon src={rmbIcon} />
              <Icon src={wasdIcon} />
            </HotkeyDescription>
          </Well>
        </OnboardingPopover>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingPopover target="#hierarchy-panel" {...props} position="left">
          Objects you add to the scene show up in the hierarchy panel. Double click the object you added to focus it.
          You can also press the F key to focus the selected object.
          <Well>
            <HotkeyDescription action="Focus Selected Object">
              <div>F</div>
            </HotkeyDescription>
          </Well>
        </OnboardingPopover>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingDialog videoSrc={translationVideo} {...props}>
          <h2>Manipulating Objects</h2>
          <h1>Translation</h1>
          <p>After selecting an object you can drag the arrows on the transform controls to move an object.</p>
          <p>
            To move an object you must be in translation mode. Click the translation mode button in the toolbar or the W
            key to switch to translation mode.
          </p>
          <img src={translationImage} />
          <Well>
            <HotkeyDescription action="Translation Mode">
              <div>W</div>
            </HotkeyDescription>
          </Well>
        </OnboardingDialog>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingDialog videoSrc={rotationVideo} {...props}>
          <h2>Manipulating Objects</h2>
          <h1>Rotation</h1>
          <p>
            To rotate an object you must be in rotation mode. Click the rotation mode button in the toolbar or the E key
            to switch to rotation mode.
          </p>
          <img src={rotationImage} />
          <Well>
            <HotkeyDescription action="Rotation Mode">
              <div>E</div>
            </HotkeyDescription>
          </Well>
        </OnboardingDialog>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingDialog videoSrc={scaleVideo} {...props}>
          <h2>Manipulating Objects</h2>
          <h1>Scale</h1>
          <p>
            To scale an object you must be in scale mode. Click the scale mode button in the toolbar or the R key to
            switch to scale mode.
          </p>
          <img src={scaleImage} />
          <Well>
            <HotkeyDescription action="Scale Mode">
              <div>R</div>
            </HotkeyDescription>
          </Well>
        </OnboardingDialog>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingDialog videoSrc={snappingVideo} {...props}>
          <h2>Manipulating Objects</h2>
          <h1>Snapping</h1>
          <p>
            Sometimes you may want to move an object with a precise position or rotation. To do this enable the snapping
            mode.
          </p>
          <img src={snappingImage} />
          <Well>
            <HotkeyDescription action="Snapping Mode">
              <div>C</div>
            </HotkeyDescription>
          </Well>
        </OnboardingDialog>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingPopover target="#viewport-panel .toolbar" {...props} position="bottom">
          Go ahead and try translating, rotating, and scaling the object you added to the scene. When you&#39;re ready
          to continue, click next.
          <Well>
            <HotkeyDescription action="Translation Mode">
              <div>W</div>
            </HotkeyDescription>
            <HotkeyDescription action="Rotation Mode">
              <div>E</div>
            </HotkeyDescription>
            <HotkeyDescription action="Scale Mode">
              <div>R</div>
            </HotkeyDescription>
            <HotkeyDescription action="Snapping Mode">
              <div>X</div>
            </HotkeyDescription>
          </Well>
        </OnboardingPopover>
      );
    }
  },
  {
    render(props) {
      return (
        <OnboardingPopover target="#properties-panel" {...props} position="left">
          Great job! Additional object properties can be set in the properties panel. This includes things like shadows,
          light color, and more. Go ahead and turn on shadows for your model by clicking the cast shadows checkbox.
        </OnboardingPopover>
      );
    }
  },
  {
    component: WrappedSaveProjectDialog
  },
  {
    component: WrappedSaveProjectPopover
  },
  {
    render(props) {
      return (
        <OnboardingDialog {...props} disablePrev>
          <h2>Saving and Publishing</h2>
          <h1>Publishing Your Project</h1>
          <p>
            Once your project is ready, you can publish it to Mozilla Hubs and invite your friends with the click of a
            button.
          </p>
        </OnboardingDialog>
      );
    }
  },
  {
    component: WrappedPublishScenePopover
  },
  {
    render(props) {
      return (
        <OnboardingDialog {...props} disablePrev disableSkip>
          <h2>Saving and Publishing</h2>
          <h1>Great Job!</h1>
          <p>
            Great job! You&#39;ve touched all the basics of Spoke and published a scene to Hubs! To get started on your
            own scene check out your projects page. Or click finish to continue working on this scene.
          </p>
          <Button as={Link} to="/projects">
            My Projects
          </Button>
        </OnboardingDialog>
      );
    }
  }
];

export default function Onboarding({ onFinish }) {
  return <OnboardingContainer steps={steps} onFinish={onFinish} />;
}

Onboarding.propTypes = {
  onFinish: PropTypes.func.isRequired
};
