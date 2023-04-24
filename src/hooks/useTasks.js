
export const useTasks = () => {

  const { VITE_API_SERVER_URL } = import.meta.env

  const addTask = async(text) => {

    const userId = window.localStorage.getItem("userId");

    try {
      const response = await fetch(`${VITE_API_SERVER_URL}/tasks/` , {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({text, author: userId})
      });

      const result = await response.json();

      return result.data

    } catch (error) {
      console.error(error);
    }
  }

  const getTasks = async() => {

    const userId = window.localStorage.getItem("userId")

    try {
      const response = await fetch(`${VITE_API_SERVER_URL}/tasks/${userId}`);

      const result = await response.json();

      return result.data

    } catch (error) {
      console.error(error);
    }
  }

  const deleteTask = async(id) => {

    try {
      const response = await fetch(`${VITE_API_SERVER_URL}/tasks/${id}`, {
        method: "DELETE"
      });

      const result = await response.json();

      console.log(result);

    } catch (error) {
      console.error(error);
    }
  }

  const editTask = async(id, prop) => {

    try {
      const response = await fetch(`${VITE_API_SERVER_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(prop)
      });

      const result = await response.json();

      console.log(result);

    } catch (error) {
      console.error(error);
    }
  }


  return {addTask, getTasks, deleteTask, editTask}
}
