import { collection,getDocs } from "firebase/firestore";
import { DB } from "../firebase-config";


const q = collection(DB, "projects");
export const getProjects = async ()=>{
    try{
        const querySnapshot = await getDocs(q);
        let projects = []
        querySnapshot.forEach((doc)=>{
            projects.push({id : doc.id , ...doc.data()})
        })
        return projects
    }catch(err){
        console.log(err)
    }
}