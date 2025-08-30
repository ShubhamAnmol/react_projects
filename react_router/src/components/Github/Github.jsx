import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ShubhamAnmol')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()


    return (
        <div>
            Github Followers: {data.followers}
            <img src="data.avatar_url" alt="git pic" />
        </div>
        
    );
}

export const githubInfoLoader = async() => {
    const resp = await fetch('https://api.github.com/users/ShubhamAnmol')
    return resp.json()

}