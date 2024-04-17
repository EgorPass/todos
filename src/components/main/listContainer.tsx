import { useContextComp } from "../useHooks/useContextComp"
import { BemContainer, MyCheckbox } from "../structure/elements"
import FC, { ITask, IContext } from "../../types/types"
import "../../styles/listContainer.scss"

/**
 * Компонент отображает списки выбраных задач.
 * для отображения задач по сотоянию sort для tasks использует функцию filterTree.
 */
export const ListContainer: FC = () => {
	const {
		filterTree,
		tasks, handleChangeCheckbox
	} = useContextComp() as IContext;

	return (
		<BemContainer
			className = 'todos__listContainer listContainer'
		>
			<ul
				className=" listContainer__listBox"
			>
				{
					tasks.filter( filterTree ).map( ( it: ITask ) => {
						return (
							<li
								key = { it.id }
								className = "listContainer__listItem"
							>
								<MyCheckbox
									status = { it.status }
									value = { it.value }
									id = { it.id }
									handleChangeCheckbox = { handleChangeCheckbox }
								/>	
							</li>
						)
					})
				}
			</ul>
		</BemContainer>
	)
}