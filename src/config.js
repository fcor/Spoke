import Editor from "./editor/Editor";

import SceneNode from "./editor/nodes/SceneNode";
import SceneNodeEditor from "./ui/properties/SceneNodeEditor";
import GroupNode from "./editor/nodes/GroupNode";
import GroupNodeEditor from "./ui/properties/GroupNodeEditor";
import ModelNode from "./editor/nodes/ModelNode";
import ModelNodeEditor from "./ui/properties/ModelNodeEditor";
import GroundPlaneNode from "./editor/nodes/GroundPlaneNode";
import GroundPlaneNodeEditor from "./ui/properties/GroundPlaneNodeEditor";
import BoxColliderNode from "./editor/nodes/BoxColliderNode";
import BoxColliderNodeEditor from "./ui/properties/BoxColliderNodeEditor";
import AmbientLightNode from "./editor/nodes/AmbientLightNode";
import AmbientLightNodeEditor from "./ui/properties/AmbientLightNodeEditor";
import DirectionalLightNode from "./editor/nodes/DirectionalLightNode";
import DirectionalLightNodeEditor from "./ui/properties/DirectionalLightNodeEditor";
import SpotLightNode from "./editor/nodes/SpotLightNode";
import SpotLightNodeEditor from "./ui/properties/SpotLightNodeEditor";
import PointLightNode from "./editor/nodes/PointLightNode";
import PointLightNodeEditor from "./ui/properties/PointLightNodeEditor";
import HemisphereLightNode from "./editor/nodes/HemisphereLightNode";
import HemisphereLightNodeEditor from "./ui/properties/HemisphereLightNodeEditor";
import SpawnPointNode from "./editor/nodes/SpawnPointNode";
import SpawnPointNodeEditor from "./ui/properties/SpawnPointNodeEditor";
import SkyboxNode from "./editor/nodes/SkyboxNode";
import SkyboxNodeEditor from "./ui/properties/SkyboxNodeEditor";
import FloorPlanNode from "./editor/nodes/FloorPlanNode";
import FloorPlanNodeEditor from "./ui/properties/FloorPlanNodeEditor";
import ImageNode from "./editor/nodes/ImageNode";
import ImageNodeEditor from "./ui/properties/ImageNodeEditor";
import VideoNode from "./editor/nodes/VideoNode";
import VideoNodeEditor from "./ui/properties/VideoNodeEditor";
import SpawnerNode from "./editor/nodes/SpawnerNode";
import SpawnerNodeEditor from "./ui/properties/SpawnerNodeEditor";
import TriggerVolumeNode from "./editor/nodes/TriggerVolumeNode";
import TriggerVolumeNodeEditor from "./ui/properties/TriggerVolumeNodeEditor";
import LinkNode from "./editor/nodes/LinkNode";
import LinkNodeEditor from "./ui/properties/LinkNodeEditor";
import ParticleEmitterNode from "./editor/nodes/ParticleEmitterNode";
import ParticleEmitterNodeEditor from "./ui/properties/ParticleEmitterNodeEditor";
import KitPieceNode from "./editor/nodes/KitPieceNode";
import KitPieceNodeEditor from "./ui/properties/KitPieceNodeEditor";

import SketchfabSource from "./ui/assets/sources/SketchfabSource";
import PolySource from "./ui/assets/sources/PolySource";
import BingImagesSource from "./ui/assets/sources/BingImagesSource";
import BingVideosSource from "./ui/assets/sources/BingVideosSource";
import TwitchSource from "./ui/assets/sources/TwitchSource";
import TenorSource from "./ui/assets/sources/TenorSource";
import ElementsSource from "./ui/assets/sources/ElementsSource";
import MyAssetsSource from "./ui/assets/sources/MyAssetsSource";
import ArchitectureKitSource from "./ui/assets/sources/ArchitectureKitSource";

export function createEditor(api, settings) {
  const editor = new Editor(api, settings);

  editor.registerNode(SceneNode, SceneNodeEditor);
  editor.registerNode(GroupNode, GroupNodeEditor);
  editor.registerNode(ModelNode, ModelNodeEditor);
  editor.registerNode(GroundPlaneNode, GroundPlaneNodeEditor);
  editor.registerNode(BoxColliderNode, BoxColliderNodeEditor);
  editor.registerNode(AmbientLightNode, AmbientLightNodeEditor);
  editor.registerNode(DirectionalLightNode, DirectionalLightNodeEditor);
  editor.registerNode(HemisphereLightNode, HemisphereLightNodeEditor);
  editor.registerNode(SpotLightNode, SpotLightNodeEditor);
  editor.registerNode(PointLightNode, PointLightNodeEditor);
  editor.registerNode(SpawnPointNode, SpawnPointNodeEditor);
  editor.registerNode(SkyboxNode, SkyboxNodeEditor);
  editor.registerNode(FloorPlanNode, FloorPlanNodeEditor);
  editor.registerNode(ImageNode, ImageNodeEditor);
  editor.registerNode(VideoNode, VideoNodeEditor);
  editor.registerNode(SpawnerNode, SpawnerNodeEditor);
  editor.registerNode(TriggerVolumeNode, TriggerVolumeNodeEditor);
  editor.registerNode(LinkNode, LinkNodeEditor);
  editor.registerNode(ParticleEmitterNode, ParticleEmitterNodeEditor);
  editor.registerNode(KitPieceNode, KitPieceNodeEditor);

  editor.registerSource(new ElementsSource(editor));
  editor.registerSource(new MyAssetsSource(editor));
  editor.registerSource(new ArchitectureKitSource());
  editor.registerSource(new SketchfabSource(api));
  editor.registerSource(new PolySource(api));
  editor.registerSource(new BingImagesSource(api));
  editor.registerSource(new BingVideosSource(api));
  editor.registerSource(new TwitchSource(api));
  editor.registerSource(new TenorSource(api));

  return editor;
}
