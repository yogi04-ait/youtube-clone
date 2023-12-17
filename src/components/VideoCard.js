const VideoCard = ({info})=>{
    // if(!info?.snippet)
    //     return ((<p>Loading data...</p>));

    const {snippet:{channelTitle, title, thumbnails},statistics} = info;
    // const {channelTitle, title, thumbnails} = snippet;

    

    // console.log(info)
    return info.length<0? (<p>Hello how are you </p>) : (
        <div  className="m-2 max-w-[255px]">
            <img  className="rounded-md" width="250px" height="168px" src={thumbnails?.high?.url}  alt="video"/>
            <ul>
                <li className="overflow-hidden whitespace-nowrap text-ellipsis">{title}</li>
                <li>{channelTitle}</li>
                <li> views {statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard;