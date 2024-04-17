import { useContextComp } from "../useHooks/useContextComp"
import { BemContainer, Button } from "../structure/elements"
import FC, { IContext } from "../../types/types"
import "../../styles/buttonContainer.scss"

/**
 * Компонент (футер) для отображения кнопок сортировки задачника и удаления выполненных задач.
 */
export const ButtonContainer: FC =() => {
	const {
		tasks, sort, getTasksLeft,
		handleChangeSortParam, handleRemoveCompleted
	} = useContextComp() as IContext
	
	return (
		<BemContainer
			className = 'todos__buttonContainer buttonContainer'
		>
			<BemContainer
				className = "buttonContainer__leftTaskContainer"
			>
				{ tasks.filter( getTasksLeft).length } items left
			</BemContainer>
			<BemContainer
				className = "buttonContainer__sortsButtonContainer"
			>
				<Button
					title = "All"
					className={`buttonContainer__sortsButton buttonContainer__sortsButton_${sort === "all" ?  "isChoose": "notChoose"}`}
					handleChange = {handleChangeSortParam }
					data = "all" 					
					/>		
				<Button
					title = "Active"
					className={`buttonContainer__sortsButton buttonContainer__sortsButton_${sort === "active" ? "isChoose" : "notChoose"}`}
					handleChange = { handleChangeSortParam }
					data = "active"
					/>
				<Button
					title = "Completed"
					className={`buttonContainer__sortsButton buttonContainer__sortsButton_${sort === "completed" ? "isChoose" : "notChoose"}`}
					handleChange = { handleChangeSortParam }
					data = "completed"
					/>
			</BemContainer>
			<BemContainer
				className = "buttonContainer__clearTaskContainer"
				>
				<Button
					title = "Clear completed"
					className="buttonContainer__clearTask"
					handleChange = { handleRemoveCompleted }
					/>
			</BemContainer>
		</BemContainer>
	)

}