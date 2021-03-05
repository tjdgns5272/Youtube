import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list";
import Header from "./components/header";
import styles from './app.module.css';

function App({youtube}) {
    const [videos, setVideos] = useState([])

    const handleSearch = query => {
        youtube
            .search(query)
            .then(items => setVideos(items))
    }
    useEffect(() => {
        youtube
            .mostPopular()
            .then(items => setVideos(items))
    }, []);

    return (
        <div className={styles.app}>
            <Header onSearch={handleSearch}/>
            <VideoList videos={videos}/>
        </div>
    );
}

export default App;