import FC, { IHtmlContainer, IButton } from "../../types/types"

/**
 * Компонент для логической разбивки верстки.
 * Используется для каждого блока или элемента, 
 * остальные div прописываем ручками или выделяем в другие компоненты
 */
export const BemContainer: FC<IHtmlContainer> = ({ children, className = "" }) =>  (
	<div
		className = { className }
	>
		{ children }
	</div>
)

/**
 * Компонент для реализации кнопки
 */
export const Button: FC<IButton> = ({ title, className, handleChange, data }) => (
	<button
		className = { className }
		onClick = { handleChange }
		data-sort-field = { data }
	>
		{ title }
	</button>
)

/**
 * Компонент кнопки в поле ввода.
 */
export const AcceptButton: FC = () => (
	<div
		className="inputContainer__acceptButtonArrow"
	></div>
)

/**
 * Компонент кастумного чек бокса, который используется в списке задач
 * Содержит в себе представление чек бокса и подписи к нему
 */
export const MyCheckbox: FC<any> = ({ status, id, value, handleChangeCheckbox } ) => (
	<BemContainer
		className = "listContainer__checkboxContainer"
	>
		<input
			id = { id }
			type = "checkbox"
			defaultChecked = { status }
			className = "listContainer__Input"
			onChange = { handleChangeCheckbox }
		/>
		<BemContainer
			className = "listContainer__checkboxInputContainer"
		>
			<label
				htmlFor = { id }
				className = "listContainer__checkbox"
			>
			</label>
		</BemContainer>
		<BemContainer
			className = "listContainer__checkboxLabelContainer"
		>
			<label
				htmlFor = { id }
				className = "listContainer__checkboxLabel"
			>
				{ value }
			</label>
			</BemContainer>
	</BemContainer>

)
