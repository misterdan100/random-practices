'use client'

import { createTodo } from "@/actions/create-action";
import { FormData } from "@/interfaces/todo.interface";
import { useTodoStore } from "@/stores";
import { Status } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose, IoCloseCircleOutline, IoFlag, IoReaderOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const buttonsStyles = "flex items-center gap-2 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-1 text-sm cursor-pointer"

const initialFormData: FormData = {
  title: '',
  status: 'notStarted',
  priority: 'low',
}

export const CreateTodoModal = () => {
    const router = useRouter()
    const openCloseModal = useTodoStore( state => state.openCloseModal)
    const modalState = useTodoStore( state => state.modalState)

    const [formData, setFormData] = useState<FormData>(initialFormData)

    const handleCreate = async () => {
      const newTodo = await createTodo(formData)

      if(!newTodo) {
        toast.error('Error creating Todo')
        return
      }

      // Reset form and close modal
      toast.success('Todo created')
      router.refresh()
      setFormData(initialFormData)
      openCloseModal(false)
    }

    const clearDate = () => {
      setFormData(pre => {
        const { dueDate, ...rest} = pre
        return rest
      })
    }


    if(modalState) return (
    <div
      className="flex justify-center items-center transition duration-150 ease-in-out z-40 absolute top-0 right-0 bottom-0 w-screen h-screen"
      id="modal"
    >
      {/* blur background */}
      <div className="absolute top-0 right-0 bottom-0 w-screen h-screen z-39 bg-gray-400/25 backdrop-filter backdrop-blur-sm" />

      {/* Modal */}
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <form 
          
          className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-xl border border-gray-400"
        >
          {/* Main Icon */}
          <div className="w-full flex justify-start mt-4 items-center text-gray-600 mb-3 ">
            <IoReaderOutline
              className="icon icon-tabler icon-tabler-wallet"
              size={32}
            />

            <input
              className="text-gray-800 font-lg font-bold ml-2 leading-tight text-2xl bg-gray-100 rounded-lg w-full px-3 py-2"
              id="title"
              placeholder="Todo title...."
              value={formData.title}
              onChange={e => setFormData(prev => ({...prev, title: e.target.value}))}
            />
          </div>

          <label
            htmlFor="name"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Description
          </label>
          <textarea
            id="name"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center p-3 text-sm border-gray-300 rounded border"
            placeholder="Todo description"
            value={formData.description}
            onChange={e => setFormData(prev => ({...prev, description: e.target.value}))}
          />

          <label
            htmlFor="expiry"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Due Date
          </label>
          <div className="flex items-center">
            <input
              id="date"
              type="date"
              className="mb-5 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal h-10  items-center pl-3 text-sm border-gray-300 rounded border flex justify-between w-full"
              value={formData.dueDate?.toString() ?? ''}
              onChange={e => setFormData({...formData, dueDate: e.target.value.toString()})}
              />
                <IoCloseCircleOutline 
                  size={24}
                  onClick={clearDate}
                  className="cursor-pointer text-gray-600 hover:text-gray-800"
                />
          </div>

          {/* Status ------------------------ */}
          <label 
            htmlFor="status"
            className="mb-4 text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Status
          </label>
          {/* "notStarted" | "inProgress" | "paused" | "done" */}

          <div className="flex mb-5 mt-2 gap-2 justify-start">
            <select 
              name="status" 
              id="status"
              className=" text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal h-10  items-center pl-3 text-sm border-gray-300 rounded border flex justify-between w-full"
              onChange={(e) => setFormData({...formData, status: e.target.value as Status})}
            >
              <option value="notStarted">
                Not started</option>
              <option value="inProgress">
                In progress</option>
              <option value="paused">
                Paused</option>
              <option value="done">
                Done</option>
            </select>

          </div>

          {/* Priority */}
          <label
            htmlFor="expiry"
            className="mb-4 text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Priority
          </label>

          <div className="flex mb-5 mt-2 gap-2 justify-start">
            <div>
              <label
                htmlFor="medium"
                className={clsx(
                  buttonsStyles,
                  {
                    'border-yellow-500': formData.priority === 'low',
                  }
                )}
                onClick={() => setFormData(prev => ({...prev, priority: 'low'}))}
              >
                <IoFlag 
                  className="text-yellow-500"
                />
                Low
              </label>
              <input id="low" type="radio" name="priority" className="hidden" />
            </div>

            <div>
              <label
                htmlFor="medium"
                className={clsx(
                  buttonsStyles,
                  {
                    'border-orange-500': formData.priority === 'medium',
                  }
                )}
                onClick={() => setFormData(prev => ({...prev, priority: 'medium'}))}
              >
                <IoFlag 
                  className="text-orange-500"
                />
                Medium
              </label>
              <input
                id="medium"
                type="radio"
                name="priority"
                className="hidden"
              />
            </div>

            <div>
              <label
                htmlFor="medium"
                className={clsx(
                  buttonsStyles,
                  {
                    'border-red-500': formData.priority === 'high',
                  }
                )}
                onClick={() => setFormData(prev => ({...prev, priority: 'high'}))}
              >
                <IoFlag 
                  className="text-red-500"
                />
                High
              </label>
              <input
                id="high"
                type="radio"
                name="priority"
                className="hidden"
              />
            </div>
          </div>

          

          <div className="flex gap-2 items-center justify-start w-full mt-6">
            <button 
              type="button"
              className="btn-primary"
              onClick={handleCreate}
            >
              Create
            </button>
            <button 
                className="btn-secondary"
                onClick={() => openCloseModal(false)}
            >
              Cancel
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            aria-label="close modal"
            role="button"
            onClick={() => openCloseModal(false)}
          >
            <IoClose 
              className="icon icon-tabler icon-tabler-x"
              size={20}
            />
            
          </button>
        </form>
      </div>
    </div>
  );
};
