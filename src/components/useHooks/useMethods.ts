import { useState } from "react"
import { ITask, IFormEvent, IChangeEventInput, IChangeEventButton, ISort, IFilter, IUseMethods, IData  } from "../../types/types"

/**
 * 
 * Все состояния и логика для управления,
 * то есть функции для обработки событий
 * и работы со стейто здесь
 */
export const useMethods: IUseMethods = (  ) => {

	const [ tasks, setTasks ] = useState<IData>( [] )  
	const [ sort, setSort ] = useState<ISort>("all")
	const [ newTask, setNewTask ] = useState<string>("")

	const handleChangeCheckbox = (e:IChangeEventInput) => {
		const target = e.target
		if("id" in target) {
			setTasks(prev => (
				prev.map(it => {
				if (it.id === +(target.id as string) ) {
					return {
						...it,
						status: !it.status
					}
				}
				return it
			})
			))
		}
	}

	const handleAddTask = (e: IFormEvent) => {
		e.preventDefault();
		if (newTask.length < 5) {
			return
		}
		else {
			setTasks(prev => ([
				...prev,
				{
					id: Date.now(),
					status: false,
					value: newTask,

				}
			]))
			setNewTask("")
		}
	}

	const handleChangeInput = (e: IChangeEventInput) => {
		const { value } = e.target		
		setNewTask( value )
	}

	const handleChangeSortParam = (e: IChangeEventButton) => {
		const { target } = e
		const data = target?.dataset?.sortField
		if (!data) return;
		else setSort( data as ("all" | "active" | "completed" ) )
 	}

	const handleRemoveCompleted = (e: IChangeEventButton) => {
		setTasks(prev => (
			prev.filter( it => !it.status)
		))
	}

	const filterTree: IFilter = ( it: ITask  ) => {
		if (sort === "all") return !!it
		else if (sort === "active") return !it.status
		else return it.status
	}

	const getTasksLeft: IFilter = ( (it: ITask) => !it.status )

	return {
		setTasks,
		tasks, sort, newTask,
		filterTree, getTasksLeft,
		handleChangeCheckbox,
		handleAddTask, handleChangeInput,
		handleChangeSortParam, handleRemoveCompleted,

	}
}