import React from 'react';
import styles from './video_item.module.css'

function VideoItem({video: {snippet}}) {
    return (
        <li className={styles.container}>
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