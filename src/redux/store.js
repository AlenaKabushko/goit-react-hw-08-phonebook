import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
    reducer: rootReducer,
})



//создание стора 
//reducer - функция с логикой изменения состояния Redux. Обязательный параметр.
// preloadedState - начальное состояние приложения. 
//Это должен быть объект той же формы, что и, как минимум, часть состояния.Необязательный параметр.
// enhancer - функция расширения возможностей стора. Необязательный параметр.