import { useEffect } from "react"
import { ContextComp } from "./components/useHooks/useContextComp"
import { useMethods } from "./components/useHooks/useMethods"
import Todos from "./components/todos"
import "./styles/todos.scss"

/**
 * В App обеденияем работу с контекстом и начальной работой с состоянием.
 * В useEffect эмуляция загрузки состояния со стороны, 
 * сохранения уже введённого и объединение с появившемся позже.
 * 
 * Если увеличть время задержки, то можно проверить, что слияние введённых задач 
 * и подгруженных позже работает корректно. 
 * 
 * useMethods распаковывает в App состояния и методы для событий, которые 
 * передаются в контекст.
 * 
 * логическая часть раскидана по трём файлам useContext, useMethods и App, 
 * первые два объединяются в App.
 * Остальные компоненты для вёрстки и  принимают состояние и методы из контектса
 */
function App() {

	// состояния и методы для управления приложением
	const taskData = useMethods()
	
	useEffect(() => {
		// эмуляция асинхронной подгрузки данных 
		//
		setTimeout(() => {
			taskData.setTasks(prev => (
				[...prev,
					...[
							{
								id: 1,
								value: "Тестовое задание",
								status: false,
							},
							{
								id: 2,
								value: "Прекрасный код",
								status: true,
							},
							{
								id: 3,
								value: "Покрытие тестами",
								status: false,
							},
						]
					]
				)
			)			
		}
			, 3000 
		)
	},
		[  ]
	)

	return (
		<ContextComp data = { taskData } >
			<Todos />
		</ContextComp>
  );
}

export default App;
