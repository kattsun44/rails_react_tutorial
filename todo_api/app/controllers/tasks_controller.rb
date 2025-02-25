class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    Task.create(task_params)
    head :created
  end

  def task_params
    params.permit(%i[name is_done])
  end
end
