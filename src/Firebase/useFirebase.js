import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from './config.js'

const useFirebase = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    const getTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksFirebase = []

      querySnapshot.forEach((doc) => {
        tasksFirebase.push({id: doc.id, ...doc.data()});
      });
      console.log("function getTask executed")

      setTasks(tasksFirebase);
    }

    getTasks();
    
  }, [])
  
  return [tasks, setTasks];
}

export default useFirebase;