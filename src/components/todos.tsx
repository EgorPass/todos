import { Header } from "./header/header"
import { InputContainer } from "./main/inputContainer"
import { ListContainer } from "./main/listContainer"
import { ButtonContainer } from "./main/buttonContainer"
import FC from "../types/types"

/**
 * Компонент для группировки лэйаута макета.
 * Плюс этот компонент обвёрнут в контест,
 * и его компоненты InputContainer, ListContainer и ButtonContainer, 
 * принимают из контекста методы для управления приложением.
 * 
 */
const Todos: FC = () => (
	<main
		className = "mainScreen__todos todos"
	>
		<section
			className = 'todos__boxContainer'
		>
			<Header />
			<article
				className = 'todos__mainContainer'
			>
				<InputContainer	/>
				<ListContainer	/>	
				<ButtonContainer />
			</article>
		</section>
	</main>
)


export default Todos