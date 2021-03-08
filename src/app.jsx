import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list";
import Header from "./components/header";
import styles from './app.module.css';
import VideoDetails from "./components/video_details";

function App({youtube}) {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
    const handleSearch = query => {
        setSelectedVideo(null)
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
            <div className={styles.content}>
                {selectedVideo &&
                <div className={styles.details}>
                    <VideoDetails video={selectedVideo}/>
                </div>}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? 'list' : 'grid'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;