import React from 'react';
import styles from './video_details.module.css';

const VideoDetails = ({video, video:{snippet}}) => (
    <div className={styles.details}>
        <iframe
            className={styles.video}
            type="text/html"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            frameBorder="0"
            allowFullScreen>
        </iframe>
        <h3 className={styles.title}>{snippet.title}</h3>
        <h5>Channel : {snippet.channelTitle}</h5>
        <pre className={styles.description}>{snippet.description}</pre>


    </div>
);

export default VideoDetails;