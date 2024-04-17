import { useContextComp } from "../useHooks/useContextComp";
import { BemContainer, Button, AcceptButton } from "../structure/elements";
import FC, { IContext } from "../../types/types";
import "../../styles/inputContainer.scss"

/**
 * Компонент для ввода новой задачи
 * 
 */
export const InputContainer: FC= () => {
	const {
		handleAddTask, handleChangeInput, newTask
	} = useContextComp() as IContext;

	return (		
	<form
		className = 'todos__inputContainer inputContainer'
	>
		<BemContainer
			className='inputContainer__acceptContainer'
		>
			<Button
				title = { <AcceptButton /> }
				handleChange = { handleAddTask }
				className="inputContainer__acceptButton"
			/>
		</BemContainer>
		<BemContainer
			className='inputContainer__inputBox'
		>
			<input
				type="text"
				className='inputContainer__input'
				placeholder="What need to be done?"
				onChange={ handleChangeInput }
				value = { newTask }
			/>
		</BemContainer>
	</form>
)
}

