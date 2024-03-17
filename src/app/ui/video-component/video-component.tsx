

import { FC, useEffect } from "react";

const VideoComponent: FC<{ page: string, widthSlide: number }> = ({ page, widthSlide }) => {
    // const src = await getVideoSrc()

    return <iframe
        max-width={`${widthSlide}`}
        nax-height="315"
        loading="lazy"
        src={`https://www.youtube.com/embed/${page}`}
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
    </iframe>
}

export default VideoComponent;
