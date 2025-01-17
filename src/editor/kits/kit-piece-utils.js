import findObject from "../utils/findObject";
import { getComponent } from "../gltf/moz-hubs-components";

export function getKitPieceComponent(object) {
  return getComponent(object, "kit-piece");
}

export function isPiece(object, pieceId) {
  const component = getKitPieceComponent(object);
  return component && component.id == pieceId;
}

export function findKitPiece(object, pieceId) {
  return findObject(object, child => isPiece(child, pieceId));
}
