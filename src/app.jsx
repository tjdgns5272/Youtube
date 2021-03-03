import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list";
import Header from "./components/header";
import styles from './app.module.css';
import * as url from "url";

function App() {
    const [videos, setVideos] = useState([])
    const [input, setInput] = useState("")
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log("fetching...")
        // const defaultUrl
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAvsKgkC1UZlZMVtg-sU7lMzB3YxplC93M&chart=mostPopular&q=${input}`
            , requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));

        console.log("complete")
    }, [input])

    const handleAdd = input => {
        setInput(input)
    }
    return (
        <div>
            <Header onAdd={handleAdd}/>
            <VideoList videos={videos}/>
        </div>
    );
}

export default App;