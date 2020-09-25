import React, {useState} from 'react';
import Layout from "../components/Layout";
import VideoPlayer from "../components/VideoPlayer";
import VideoControlPanel from "./VideoControlPanel";

/**
 * Main video screen
 * @param props
 * @returns {*}
 * @constructor
 */
const VideoScreen = (props) => {
    const { navigation } = props;
    const [videoSource, setVideoSource] = useState(null);

    return (
        <Layout
            type={'video'}
            navigation={navigation}
            headerText={"Video"}
            onUploadPressed={file => setVideoSource(file)}
            viewContent={(
                <VideoPlayer
                    source={videoSource}
                />
            )}
            controlPanel={(
                <VideoControlPanel
                    navigation={navigation}
                    videoSource={videoSource}
                    setVideoSource={setVideoSource}
                />
            )}
        />
    );
};

export default VideoScreen;
