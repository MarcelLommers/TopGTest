// Pages
import HelloWorld from "../components/HelloWorld"

import TaskPage from '../pages/TaskPage'
import Task2Page from '../pages/Task2Page'


export default [
  {
    path: "/home",
    alias: '/',
    name: "Home",
    components: {
      content: HelloWorld
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task1",
    name: "Task1",
    components: {
      content: TaskPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task2",
    name: "Task2",
    components: {
      content: Task2Page
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task3",
    name: "Task3",
    components: {
      content: TaskPage
    },
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/task4",
    name: "Task4",
    components: {
      content: TaskPage
    },
    meta: {
      allowAnonymous: true
    }
  }

]
