import { FC, FormEvent, FormEventHandler, ChangeEvent, ChangeEventHandler, ReactNode, SetStateAction , Dispatch} from "react";

export interface ITask {
	id: number;
	value: string;
	status: boolean;
}
export type ISort = "all" | "active" | "completed"
export type INewTask = string
export type IFilter = (it: ITask ) => boolean
export type IFormEvent = FormEvent<HTMLInputElement>
export type IChangeEventInput = ChangeEvent<HTMLInputElement>
export type IChangeEventButton = ChangeEvent<HTMLButtonElement>
export type IData = ITask[ ] | [ ]
export interface IHtmlContainer{
	children: ReactNode | string;
	className?: string;
}
export interface IButton {
	className: string;
	title: string | ReactNode;
	handleChange: FormEventHandler;
	data?: string;
}
export interface IContext {
	setTasks: Dispatch<SetStateAction<IData>>;
	tasks: IData;
	sort: ISort;
	newTask: INewTask;
	filterTree: IFilter;
	getTasksLeft: IFilter;
	handleChangeCheckbox: ChangeEventHandler;
	handleAddTask: FormEventHandler;
	handleChangeInput: ChangeEventHandler;
	handleChangeSortParam: FormEventHandler;
	handleRemoveCompleted: FormEventHandler;
}
export interface IContextComp {
	children: ReactNode,
	data: IContext
}
export type IUseMethods = ( ) => IContext

export default FC