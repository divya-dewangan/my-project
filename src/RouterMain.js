import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RouterNewbar from './RouterNewbar'
import Home from './Home'
import TaskOne from './TaskOne'
import Card from './Card'
import ChangeTask from './ChangeTask'
import InputTask from './InputTask'
import InputTaskThree from './InputTaskThree'
import InputATaskTwo from './InputATaskTwo'
import NameTask from './NameTask'
import MapTaskOne from './MapTaskOne'
import MapTaskTwo from './MapTaskTwo'
import ProgressComponent from './ProgressComponent'
import UseRefTask from './UseRefTask'
import UseEffectTaskOne from './UseEffectTaskOne'
import TableTaskTwo from './TableTaskTwo'
import TaskThree from './TaskThird'
import TaskFive from './TaskFive'
import TasksSix from './TasksSix'
import TaskSeven from './TaskSeven'
import TaskEight from './TaskEight'
import TaskNine from './TaskNine'
import TaskTen from './TaskTen'
import TaskEleven from './TaskEleven'
import TaskTwelve from './TaskTwelve'
import TaskThirtine from './TaskThirtine'
import TaskFourtine from './TaskFourtine'
import TaskFifteen from './TaskFifteen'
import ValidationTask from './ValidationTask'
import ValidationTaskthree from './ValidationTaskthree'
import RagistrationValidationTask from './RagistrationValidationTask'
import FormVlidation from './FormVlidation'
import PropsDeling from './PropsDeling'
import CardDeleing from './CardDeleing'
import IncrementTask from './IncrementTask'
import AppointmentForm from './AppointmentForm'
import InputTableTask from './InputTableTask'
import InputArrayMathod from './InputArrayMathod'
import InputArrayMathodTwo from './InputArrayMathodTwo'
function RouterMain() {
    return (
        <BrowserRouter>
            <RouterNewbar />
            <Routes>

                <Route path='/input-array-mathod' element={<InputArrayMathod />} />
                <Route path='/input-array-mathod-two' element={<InputArrayMathodTwo />} />
                <Route path='/input-table-task' element={<InputTableTask />} />
                <Route path='/appointment-form' element={<AppointmentForm />} />
                <Route path='/increment-task' element={<IncrementTask />} />
                <Route path='/card-deling' element={<CardDeleing />} />
                <Route path='/props-deling' element={<PropsDeling />} />
                <Route path='/home' element={<Home />} />
                <Route path='/task-one' element={<TaskOne />} />
                <Route path='/card' element={<Card />} />
                <Route path='/change-task' element={<ChangeTask />} />
                <Route path='/input-task' element={<InputTask />} />
                <Route path='/input-task-two' element={<InputATaskTwo />} />
                <Route path='/inputtask-three' element={<InputTaskThree />} />
                <Route path='/map-task-one' element={<MapTaskOne />} />
                <Route path='/map-task-two' element={<MapTaskTwo />} />
                <Route path='/name-task' element={<NameTask />} />
                <Route path='/progress-component' element={<ProgressComponent />} />
                <Route path='/use-ref-task' element={<UseRefTask />} />
                <Route path='/ref-task-two' element={<UseEffectTaskOne />} />
                <Route path='/table-task' element={<TableTaskTwo />} />
                <Route path='/table-task-two' element={<TableTaskTwo />} />
                <Route path='/task-three' element={<TaskThree />} />
                <Route path='/task-five' element={<TaskFive />} />
                <Route path='/tasks-six' element={<TasksSix />} />
                <Route path='/task-seven' element={<TaskSeven />} />
                <Route path='/task-eight' element={<TaskEight />} />
                <Route path='/task-nine' element={<TaskNine />} />
                <Route path='/task-ten' element={<TaskTen />} />
                <Route path='/task-eleven' element={<TaskEleven />} />
                <Route path='/task-twelve' element={<TaskTwelve />} />
                <Route path='/task-thirtine' element={<TaskThirtine />} />
                <Route path='/task-fourtine' element={<TaskFourtine />} />
                <Route path='/task-fifteen' element={<TaskFifteen />} />
                <Route path='/use-effect-task-one' element={<UseEffectTaskOne />} />
                <Route path='/validationTask' element={<ValidationTask />} />
                <Route path='/validation-taskthree' element={<ValidationTaskthree />} />
                <Route path='/RagistrationValidationTask' element={<RagistrationValidationTask />} />
                <Route path='/form-vlidation' element={<FormVlidation />} />
                <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterMain