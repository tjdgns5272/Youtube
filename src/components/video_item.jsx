import React from 'react';
import styles from './video_item.module.css'

function VideoItem({video, video: {snippet}, onVideoClick, display}) {

    const showDetails = () => {
        onVideoClick(video);
    }
    const displayType = display === 'list'? styles.list : styles.grid

    return (
        <li className={`${styles.container} ${displayType}`} onClick={showDetails}>
            <div className={styles.video}>
                <img className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt="video_thumnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}
export default VideoItem;