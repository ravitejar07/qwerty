import { Direction, DraggableData } from "./editor.interface";
import { ResizableDelta, Position } from "react-rnd";

export type DraggableBoxPropsType = {
  onDragStop?: (e: any, componentId: number, direction: DraggableData) => void;
  onResizeStop?: (
    id: string,
    e: any,
    direction: Direction,
    ref: React.ElementRef<'div'>,
    d: ResizableDelta,
    position: Position
  ) => void;
  inCanvas?: boolean;
  canvasWidth?: number;
  component?: any,
  key?: number;
  id?: number;
  box?: Box;
  resizingStatusChanged?: (status: boolean) => void;
  draggingStatusChanged?: (status: boolean) => void;
};

export type Box = {
	id: string,
	title: string,
  name: string,
	left: number,
	top: number,
	width: number,
	height: number,
	actions: { handle: string, displayName: string }[],
	component: string,
	defaultSize: { height: number, width: number},
	events: { [eventName: string]: { displayName: string } },
	exposedVariables: { [name: string] : string},
	description: string,
	displayName: string,
	general: { [name: string]: { type: string, displayName: string }},
	generalStyles: { [styleName: string]: { type: string, displayName: string} } 
}