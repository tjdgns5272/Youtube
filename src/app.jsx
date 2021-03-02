import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list";
import Header from "./components/header";

function App() {
    const [videos, setVideos] = useState([])
    const [input, setInput] = useState(null)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=AIzaSyAvsKgkC1UZlZMVtg-sU7lMzB3YxplC93M`
            , requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, [input])

    const handleAdd = input => {
        setInput(input)
    }
    return (
        <>
            <Header onAdd={handleAdd}/>
            <VideoList videos={videos}/>
        </>
    );
}

export default App;